defineChallenge({
  id: "mt",
  zh: "译",
  title: "Lost in Translation",
  level: "Easy",
  tags: ["machine translation", "platforms"],
  brief:
    "A colleague who doesn’t read Chinese ran a news article through a machine translator and asks you where to look for the original video. The translator turned the platform names into English words.",
  artifact: `
<figure class="art">
  <div class="mtbox">
    <div class="mt-h"><span>Chinese (detected)</span><span>→</span><span>English</span></div>
    <p>The 23-year-old blogger first posted the clip on <b>Vibrato</b>, where it received more than 2 million likes within a day. It was then reposted to <b>Station B</b> and <b>Little Red Book</b>, and <b>Today’s Headlines</b> picked up the story the following morning. Netizens on <b>Microblog</b> called for the restaurant to be investigated.</p>
  </div>
  <figcaption>Machine-translated news excerpt.</figcaption>
</figure>`,
  questions: [
    {
      q: "Which platform is “Vibrato”?",
      fmt: "Platform name, e.g. Weibo",
      h: ["0bd7a0cc0b553620a952c783cc3fde7dd64a3c190b4d45a478a4af97c7e7ed79","13385519097affd1e19b2d9fa63c6f9f2a7eb6ec6428864646ffbcad30043b56","2ef4e23b103c98372d3b275af1049fb1b275696deaabf53c0a7e282795419cd6","64856dc5729e7118a06884eb0282d2952a13ac9acb48904477d901992639b49e","f4b2c89255dd5600a3e8204274efb673dad09bb271ea41e9739555e70cd290c7"],
    },
    {
      q: "Which platform is “Station B”?",
      fmt: "Platform name",
      h: ["1ba5c88bb35a5f5112e7c599d73afba78e3ca8d21a5890363c8daedcb41e6f46","278ba909d8abc7873f6d4ebf2af8f8d5e558662892260cc905a2a020ff13dc2f","2eacc3198be9e25aa407b30b3e363619daa7206443c2fe7d0a1f6a4b0fbf5eaf","dd3f731451e495777e9211037da832058658b8af6f270fdf7ac4f413cd80c30c"],
    },
    {
      q: "Which platform is “Today’s Headlines”?",
      fmt: "Platform name",
      h: ["1d7dc60fa5c929630d15778377c86454380862ef47c70b12299d2c85f4e0e286","22c1d7db2bcb904aaa5e3ef6d298f054c9fd2f05664bd49836fa05a7cea5ade5","93c091e3ed6b53c7002eb8b832ab7539a96dfb3382ccd078a77f44805ef25aa6","cbd24c4e84688bf543ad204308108deec69c3d8d9a1f00d9042bcafd2ac4fa9d","cd56456025279318d9e561c468d9398dfa982c0f57a56cf117628795efdbf045","cf726fea164ab6218018ab9a0881b9fc613ef2938850a8b34f5ca74bc6ceae52"],
    },
  ],
  hints: [
    "Translators often translate a brand name literally, word by word. Try to guess the Chinese words behind each English phrase.",
    "“Vibrato” ≈ shaking + sound. “Station B” ≈ B + website (站). “Today’s Headlines” ≈ today + headlines. “Little Red Book” and “Microblog” are 小红书 and 微博.",
  ],
  learn: `
<p>Machine translation is the first thing a non-Chinese-reading analyst reaches for — and it quietly <b>translates proper nouns</b>: brands, people, places. Common ones:</p>
<ul>
  <li>抖音 <b>Douyin</b> (the Chinese sister app of TikTok — separate content and accounts) → “Vibrato”, “Trembling Sound”</li>
  <li>B站 / 哔哩哔哩 <b>Bilibili</b> → “Station B”</li>
  <li>今日头条 <b>Toutiao</b> (news aggregator, same parent company as Douyin) → “Today’s Headlines”</li>
  <li>小红书 <b>Xiaohongshu</b> (RedNote) → “Little Red Book”; 微博 <b>Weibo</b> → “Microblog”; 知乎 <b>Zhihu</b> → “Know almost”; 快手 <b>Kuaishou</b> → “Fast hand”</li>
</ul>
<p>The same happens to company names (a firm called 白云 becomes “White Cloud Co.”) and people (王海 → “Wang Sea”). When an English phrase looks odd, <b>go back to the Chinese characters</b> and search those. Translate to understand; search in the original.</p>`,
});
