(async () => {
  const $ = (s, el = document) => el.querySelector(s);
  const NEW_DAYS = 14;
  const KEY = "cnosint.progress.v1";
  const SUFFIXES = ["district", "province", "city", "shi", "qu", "sheng", "市", "区", "省"];

  /* ---------- storage (progress = { [id]: { solved: [qi...], hints: n } }) ---------- */
  let progress = {};
  try { progress = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(progress)); } catch (e) {} };
  const st = (id) => (progress[id] ||= { solved: [], hints: 0 });
  const isDone = (c) => (progress[c.id]?.solved.length || 0) === c.questions.length;

  /* ---------- answer checking (must match tools/hash.py) ---------- */
  function norm(s) {
    s = s.normalize("NFKD").toLowerCase().replace(/\p{M}/gu, "").replace(/[^\p{L}\p{N}]/gu, "");
    for (const suf of SUFFIXES) {
      if (s.endsWith(suf) && s.length > suf.length) { s = s.slice(0, -suf.length); break; }
    }
    return s;
  }
  async function sha256(s) {
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  /* ---------- loading (challenges/manifest.js → challenges/<id>/challenge.js) ---------- */
  const registry = {};
  window.defineChallenge = (c) => { registry[c.id] = c; };
  const loadScript = (src) => new Promise((res) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => res(true);
    s.onerror = () => { console.warn("Could not load", src); res(false); };
    document.head.appendChild(s);
  });

  const preview = new URLSearchParams(location.search).has("preview");
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const entries = (window.CHALLENGE_MANIFEST || [])
    .map((e) => (typeof e === "string" ? { id: e } : e))
    .map((e) => ({ ...e, date: e.from ? new Date(e.from + "T00:00:00") : null }))
    .filter((e) => preview || !e.date || e.date <= today);
  await Promise.all(entries.map((e) => loadScript(`challenges/${e.id}/challenge.js`)));

  const C = entries.filter((e) => registry[e.id]).map((e) => {
    const c = registry[e.id], dir = `challenges/${e.id}`;
    c.artifact = c.artifact.replaceAll("{{dir}}", dir);
    c.learn = c.learn.replaceAll("{{dir}}", dir);
    c.isNew = !!e.date && (today - e.date) / 864e5 < NEW_DAYS;
    c.scheduled = !!e.date && e.date > today;
    return c;
  });
  const badge = (c) => c.scheduled ? ' · <span class="badge-new">scheduled</span>' : c.isNew ? ' · <span class="badge-new">new</span>' : "";

  /* ---------- theme ---------- */
  const root = document.documentElement;
  try { const t = localStorage.getItem("cnosint.theme"); if (t) root.dataset.theme = t; } catch (e) {}
  $("#themeBtn").onclick = () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("cnosint.theme", root.dataset.theme); } catch (e) {}
  };

  /* ---------- toast ---------- */
  let toastT;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 1800);
  }

  /* ---------- views ---------- */
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const main = $("#main");

  function renderProgress() {
    const done = C.filter(isDone).length;
    $("#progTxt").textContent = `${done} / ${C.length} solved`;
    $("#progBar").style.width = `${C.length ? (100 * done) / C.length : 0}%`;
  }

  function renderList() {
    document.title = "China OSINT Challenges";
    main.innerHTML = `
      <div class="cards">${C.map((c, i) => `
        <a class="card${isDone(c) ? " done" : ""}" href="#/${c.id}">
          <span class="card-zh">${c.zh}</span>
          <span class="card-body">
            <span class="card-n">#${String(i + 1).padStart(2, "0")} · <span class="lv lv-${c.level.toLowerCase()}">${c.level}</span>${badge(c)}${isDone(c) ? ' · <span class="ok">✓ solved</span>' : ""}</span>
            <span class="card-t">${esc(c.title)}</span>
            <span class="card-tags">${c.tags.map((t) => `<i>${t}</i>`).join("")}</span>
          </span>
        </a>`).join("")}
      </div>
      <section class="panel guide">
        <h2>How it works</h2>
        <p>Each challenge gives you an artefact — a photo, a screenshot, a document — and asks one or more questions. Investigate with any open sources you like, then type your answer. Answers are checked in your browser; spelling variants (pinyin or characters, with or without “district”/“市”) are accepted where reasonable.</p>
        <p>Stuck? Each challenge has hints. After solving, a short write-up explains the technique and where to apply it in real investigations. Progress is saved in this browser only.</p>
        <p class="hint">All people, numbers, accounts and companies in the challenges are fictional unless stated otherwise.</p>
      </section>`;
  }

  function renderChallenge(c) {
    const i = C.indexOf(c);
    const s = st(c.id);
    document.title = `${c.title} · China OSINT Challenges`;
    const prev = C[i - 1], next = C[i + 1];
    main.innerHTML = `
      <nav class="crumbs"><a href="#/">← All challenges</a>
        <span>${prev ? `<a href="#/${prev.id}">‹ Prev</a>` : ""}${next ? `<a href="#/${next.id}">Next ›</a>` : ""}</span>
      </nav>
      <section class="panel">
        <div class="ch-head">
          <span class="card-zh big">${c.zh}</span>
          <div>
            <div class="card-n">#${String(i + 1).padStart(2, "0")} · <span class="lv lv-${c.level.toLowerCase()}">${c.level}</span>${badge(c)} · ${c.tags.join(", ")}</div>
            <h2 class="ch-title">${esc(c.title)}</h2>
          </div>
        </div>
        <p class="brief">${esc(c.brief)}</p>
        ${c.artifact}
      </section>
      <section class="panel">
        <label class="lbl">Questions</label>
        <form class="qs" id="qs" autocomplete="off">${c.questions.map((q, qi) => {
          const ok = s.solved.includes(qi);
          return `
          <div class="q${ok ? " solved" : ""}" data-qi="${qi}">
            <div class="q-t"><span class="q-n">${qi + 1}</span>${esc(q.q)}</div>
            <div class="q-in">
              <input type="text" spellcheck="false" placeholder="${esc(q.fmt)}" ${ok ? 'disabled value="✓ Solved"' : ""} aria-label="Answer ${qi + 1}">
              <button class="primary" type="button" ${ok ? "disabled" : ""}>Check</button>
            </div>
            <div class="q-fb" aria-live="polite"></div>
          </div>`;
        }).join("")}
        </form>
      </section>
      <section class="panel">
        <div class="rd-head"><label class="lbl" style="margin:0">Hints</label>
          <button class="ghost" id="hintBtn" ${s.hints >= c.hints.length ? "hidden" : ""}>Show hint ${Math.min(s.hints + 1, c.hints.length)} / ${c.hints.length}</button></div>
        <ol class="hints" id="hints">${c.hints.slice(0, s.hints).map((h) => `<li>${esc(h)}</li>`).join("")}</ol>
        ${s.hints ? "" : '<p class="hint" id="noHint">Try on your own first — hints are revealed one at a time.</p>'}
      </section>
      <section class="panel learn" id="learn" ${isDone(c) ? "" : "hidden"}>
        <label class="lbl">Write-up · what this teaches</label>
        ${c.learn}
        ${next ? `<p><a class="btn primary" href="#/${next.id}">Next challenge: ${esc(next.title)} →</a></p>` : `<p><a class="btn" href="#/">Back to all challenges</a></p>`}
      </section>`;

    $("#qs").addEventListener("submit", (e) => e.preventDefault());
    main.querySelectorAll(".q").forEach((el) => {
      const qi = +el.dataset.qi, inp = $("input", el), btn = $("button", el), fb = $(".q-fb", el);
      const check = async () => {
        const v = inp.value.trim();
        if (!v) return;
        const h = await sha256(`${c.id}:${qi}:${norm(v)}`);
        if (c.questions[qi].h.includes(h)) {
          if (!s.solved.includes(qi)) s.solved.push(qi);
          save();
          el.classList.add("solved"); el.classList.remove("wrong");
          inp.disabled = btn.disabled = true;
          fb.textContent = "Correct.";
          renderProgress();
          if (isDone(c)) { $("#learn").hidden = false; toast("Challenge solved 🎉"); }
        } else {
          el.classList.remove("wrong"); void el.offsetWidth; el.classList.add("wrong");
          fb.textContent = "Not quite — check the format and try again.";
        }
      };
      btn.onclick = check;
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); check(); } });
    });

    const hb = $("#hintBtn");
    hb.onclick = () => {
      if (s.hints >= c.hints.length) return;
      s.hints++; save();
      $("#noHint")?.remove();
      $("#hints").insertAdjacentHTML("beforeend", `<li>${esc(c.hints[s.hints - 1])}</li>`);
      if (s.hints >= c.hints.length) hb.hidden = true;
      else hb.textContent = `Show hint ${s.hints + 1} / ${c.hints.length}`;
    };
  }

  function route() {
    const id = location.hash.replace(/^#\/?/, "");
    const c = C.find((x) => x.id === id);
    c ? renderChallenge(c) : renderList();
    renderProgress();
    window.scrollTo(0, 0);
  }

  $("#resetBtn").onclick = () => {
    const b = $("#resetBtn");
    if (b.dataset.armed) {
      progress = {}; save(); delete b.dataset.armed; b.textContent = "Reset progress";
      route(); toast("Progress reset");
    } else {
      b.dataset.armed = "1"; b.textContent = "Click again to confirm";
      setTimeout(() => { delete b.dataset.armed; b.textContent = "Reset progress"; }, 3000);
    }
  };

  addEventListener("hashchange", route);
  route();
})();
