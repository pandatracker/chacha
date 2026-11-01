defineChallenge({
  id: "moon",
  zh: "月",
  title: "Mooncake Timestamp",
  level: "Hard",
  tags: ["chronolocation", "social media", "calendars"],
  brief:
    "Screenshots of a post are evidence in a dispute, and the date matters. The platform showed only month and day. Work out which year it was — and the dates around it.",
  artifact: `
<figure class="art">
  <div class="weibo" lang="zh-CN">
    <div class="wb-head">
      <span class="wb-av" aria-hidden="true">离</span>
      <div><b>阿离不想上班</b><br><small>09-28 21:16 · 来自 iPhone 15 Pro · IP属地：江苏</small></div>
    </div>
    <p>明天开始放八天！！中秋国庆连在一起，今晚就回老家吃月饼 🥮🥮</p>
    <svg class="wb-pic" viewBox="0 0 400 200" role="img" aria-label="Two mooncakes on a plate under a full moon">
      <rect width="400" height="200" fill="#1d2433"/>
      <circle cx="320" cy="50" r="28" fill="#f4e7b5"/>
      <ellipse cx="190" cy="160" rx="150" ry="28" fill="#e9e4da"/>
      <g fill="#c98a3c" stroke="#9c6526" stroke-width="3">
        <ellipse cx="150" cy="140" rx="54" ry="22"/><rect x="96" y="118" width="108" height="22" fill="#c98a3c" stroke="none"/><ellipse cx="150" cy="118" rx="54" ry="22" fill="#d99b4a"/>
        <ellipse cx="240" cy="148" rx="50" ry="20"/><rect x="190" y="128" width="100" height="20" fill="#c98a3c" stroke="none"/><ellipse cx="240" cy="128" rx="50" ry="20" fill="#d99b4a"/>
      </g>
      <text x="150" y="124" text-anchor="middle" font-size="16" fill="#9c6526" font-family="'Noto Sans CJK SC',sans-serif">月</text>
      <text x="240" y="134" text-anchor="middle" font-size="16" fill="#9c6526" font-family="'Noto Sans CJK SC',sans-serif">饼</text>
    </svg>
    <div class="wb-act"><span>转发 3</span><span>评论 21</span><span>赞 187</span></div>
  </div>
  <figcaption>Screenshot of the post (re-drawn).</figcaption>
</figure>`,
  questions: [
    {
      q: "In which year was the post published?",
      fmt: "YYYY",
      h: ["5412b9e2eb324f28924eeb8f8aa4c60d4da0a810cac30ef871adc449dace75de"],
    },
    {
      q: "On which date did the Mid-Autumn Festival fall that year?",
      fmt: "YYYY-MM-DD",
      h: ["41ca738fd4bebeb26cea268ec32d2601ffb57e5190950817b8978524f0c6dd40"],
    },
    {
      q: "What was the last day of the eight-day holiday?",
      fmt: "YYYY-MM-DD",
      h: ["22bb14ea5bb6ea7b689558ccdef38291070368edf1f9cedc9d049ce41f625ac0"],
    },
  ],
  hints: [
    "Mid-Autumn is on the 15th day of the 8th lunar month, so its Gregorian date changes every year. An eight-day combined Mid-Autumn + National Day holiday is rare — find the years it happened.",
    "More than one recent year fits the eight-day holiday. Read the post again: when does the holiday start, and what device was it posted from? When was that device released?",
  ],
  learn: `
<p><b>Chronolocation</b> means working out when something happened. Chinese platforms often show only <i>MM-DD</i> for posts from the current year, so screenshots lose the year.</p>
<ul>
  <li><b>Holidays</b>: the State Council publishes each year’s holiday schedule (国务院办公厅关于…年部分节假日安排的通知), including make-up working days (调休). Mid-Autumn and National Day merged into an eight-day break in <b>2020</b> (1–8 Oct; Mid-Autumn on 1 Oct) and <b>2023</b> (29 Sep – 6 Oct; Mid-Autumn on 29 Sep). A post on 09-28 saying the break starts <i>tomorrow</i> only fits 2023.</li>
  <li><b>Device strings</b>: Weibo’s “来自 …” label names the posting device. A phone can’t post before it is released — the iPhone 15 Pro came out in September 2023 — which rules out 2020 on its own.</li>
  <li><b>Lunar dates</b>: convert with any 农历 converter or a perpetual calendar (万年历). Many festivals (Spring Festival, Dragon Boat, Mid-Autumn) are lunar.</li>
</ul>
<p>Each clue is weak on its own; together they leave only one year.</p>`,
});
