defineChallenge({
  id: "zodiac",
  zh: "星",
  title: "Checksum Sudoku",
  level: "Expert",
  tags: ["identity documents", "data breaches", "social media"],
  brief:
    "A leaked delivery-app record and a dating-app profile share the same nickname. The leak masks five digits of the ID number. The profile says more than its owner meant to. Rebuild the full date of birth. (All data fictional.)",
  artifact: `
<figure class="art">
  <table class="form" lang="zh-CN">
    <caption>Leaked record (excerpt)</caption>
    <tr><th>昵称</th><td>阿杰_cd</td></tr>
    <tr><th>手机号</th><td class="mono">186****2219</td></tr>
    <tr><th>身份证号</th><td class="mono big">510104199*****0617</td></tr>
  </table>
  <div class="dating" lang="zh-CN">
    <div class="dt-pic" aria-hidden="true">阿杰</div>
    <div class="dt-body">
      <b>阿杰_cd</b> · 成都
      <div class="dt-tags"><span>♏ 天蝎座</span><span>🐴 属马</span><span>🎮 游戏</span><span>🍲 火锅</span></div>
      <p>周一出生的人，难怪天天都不想上班 😩</p>
    </div>
  </div>
  <figcaption>Leaked record and a public dating-app profile (re-drawn).</figcaption>
</figure>`,
  questions: [
    {
      q: "What is the full date of birth?",
      fmt: "YYYY-MM-DD",
      h: ["d8093bfcfc47301301db64a929f1184103e6c39e8bcf23eaf8780f41f2a7d943"],
    },
    {
      q: "In which district was the ID issued?",
      fmt: "District name",
      h: ["00772914e3d02dbe71e03e8cfd931668ee300d56e580552606e7bab421a050c0","0ad058d122ef758681ca772ce791e67409c223cc061ea57b8467480cb5427dc6","8fa5232f7cd1f2cbbd079a85d1960401ff21ce91b9482c7f45debc8d5081ded7","9026d33413a35a17b2c3f18ea397f5547ec9130fd7faf5353abe9b6acb269948","9b85a1cef960d9b70ffb2a1914627265ac46e472a215635e399e1887abd759ff","bc1a101703c6ee2c3dc82b56d24bda4f6f430c63e9e71b3e294e47a2ce48b890","c7623138c793089c62356b65bbba1eba0d5fb9868073c487e1b4ba09bcf81a57","e6aea7a921ff0e89de980c198b3af8609e2defaf99b74fb52c636aa6554eea2d"],
    },
    {
      q: "What sex is recorded in the ID?",
      fmt: "male / female",
      h: ["4aaee6ed1ef0655aab3bd8af62f0cc2e6673d4d10f797725c02405fb8a798622","b1e8ebd067942e9452fd2ce852ce744687b00c5ca28d49ee92aee15076756529","f3fa9e551276b7e5f63435270a4007d73d0fef1012e7fbea9e9c88491dc289ac","f93cf3e05998464d46ca0d909896483847ff105763af2336f6daf9446482c3d5","fc2c43eee5f4d7c3b32970100e83d0956a3ac5ea4c73bc7660cfd49c4028d321"],
    },
  ],
  hints: [
    "The masked digits are the last digit of the birth year plus the month and day. 属马 (born in a Year of the Horse) fixes the year — only one 199x year is a Horse year. 天蝎座 (Scorpio) narrows the month and day to about 23 Oct – 22 Nov.",
    "Of those dates, which fall on a Monday? Then test each candidate against the 18th character: the ID checksum (GB 11643, ISO 7064 MOD 11-2) — weights 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2, remainder → 1 0 X 9 8 7 6 5 4 3 2.",
  ],
  learn: `
<p>Masking isn’t anonymisation when the <b>check digit</b> is left visible. Combine weak clues until one candidate is left:</p>
<ol>
  <li><b>Year</b>: 属马 → 1990 (庚午, Year of the Horse from 27 Jan 1990 to 14 Feb 1991). The ninth digit 9 already fixes the decade.</li>
  <li><b>Star sign</b>: 天蝎座 → 23 Oct – 22 Nov (the exact boundaries vary by a day between sources; it doesn’t matter here).</li>
  <li><b>Weekday</b>: Mondays in that window in 1990 → 29 Oct, 5 Nov, 12 Nov, 19 Nov.</li>
  <li><b>Checksum</b>: only <span class="mono">510104 19901112 061 7</span> gives a check digit of 7. The other three give 4, 2 and 5.</li>
</ol>
<p>So: born <b>1990-11-12</b>, registered in <b>Jinjiang District, Chengdu</b> (510104), <b>male</b> (17th digit 1 is odd). A short script that loops over every possible date and keeps the ones that pass the checksum does this in seconds.</p>
<p>The same approach works for any one missing digit: the MOD 11-2 checksum always recovers a single unknown digit in an ID number. Unified Social Credit Codes (MOD 31) work the same way. Chinese social profiles routinely show star sign (星座), zodiac animal (属相) and age — all of them constraints.</p>
<p class="caveat">This is why ID numbers, even masked, are personal data. Practise on fictional data like this, and handle real leaks under the law and ethics rules that apply to you.</p>`,
});
