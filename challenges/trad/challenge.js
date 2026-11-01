defineChallenge({
  id: "trad",
  zh: "繁",
  title: "One to Many",
  level: "Easy",
  tags: ["characters", "search", "Hong Kong & Taiwan"],
  brief:
    "To search Hong Kong and Taiwan sources you converted your simplified-Chinese keywords to traditional characters with a simple character-by-character tool. Your searches found nothing. The tool’s output is below — fix it.",
  artifact: `
<figure class="art">
  <table class="form">
    <caption>Keyword conversion (naive tool)</caption>
    <tr><th>Simplified</th><th>Meaning</th><th>Tool output</th></tr>
    <tr><td>理发店</td><td>barber shop</td><td>理發店 ✗</td></tr>
    <tr><td>皇后大道中</td><td>Queen’s Road Central (Hong Kong)</td><td>皇後大道中 ✗</td></tr>
    <tr><td>牛肉面</td><td>beef noodle soup (Taiwan)</td><td>牛肉面 ✗</td></tr>
  </table>
  <figcaption>All three outputs are wrong.</figcaption>
</figure>`,
  questions: [
    {
      q: "Correct traditional form of 理发店:",
      fmt: "Traditional characters",
      h: ["87a90e12ad894cd6e12761815c72a033f1d3baccfcc6d9a8891d8ae1dcbf2394"],
    },
    {
      q: "Correct traditional form of 皇后大道中:",
      fmt: "Traditional characters",
      h: ["b784ad4b50cd7bb209e01268fb7369d951b613c25122b88dac95c63ab638a712"],
    },
    {
      q: "Correct traditional form of 牛肉面:",
      fmt: "Traditional characters",
      h: ["1c25498dc00fb2c157fc068e0e150ca98d2dc23619db662efa3bc29447489f31"],
    },
  ],
  hints: [
    "Simplification merged several different traditional characters into one. Going back, one simplified character can map to two or more traditional ones depending on meaning.",
    "发 = 發 (to emit, wealth) or 髮 (hair). 后 = 後 (behind, after) or 后 (queen/empress — unchanged). 面 = 面 (face, surface) or 麵 (noodles). A phrase-aware converter such as OpenCC gets these right.",
  ],
  learn: `
<p>Simplified Chinese merged many traditional characters into one, so <b>simplified → traditional is one-to-many</b>, while traditional → simplified is mostly safe. Naive tools (and some search engines) pick the most common mapping and produce words nobody writes:</p>
<ul>
  <li>发 → 髮 (hair: 理髮店, 頭髮) / 發 (emit, rich: 發財, 發展)</li>
  <li>后 → 后 (empress: 皇后大道中) / 後 (after: 以後)</li>
  <li>面 → 麵 (noodles: 牛肉麵) / 面 (face, side: 面積)</li>
  <li>Also: 干 → 乾 / 幹 / 干, 台 → 臺 / 台 / 檯 / 颱, 里 → 裡 / 里</li>
</ul>
<p>Regional vocabulary differs too (taxi: 出租车 mainland, 的士 HK, 計程車 Taiwan; software: 软件 vs 軟體). Use a phrase-level converter with regional profiles — <b>OpenCC</b> (s2hk, s2twp) — and confirm the term is actually used by searching it with a site filter for <span class="mono">.hk</span> or <span class="mono">.tw</span>.</p>`,
});
