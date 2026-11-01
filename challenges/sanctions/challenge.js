defineChallenge({
  id: "sanctions",
  zh: "制",
  title: "False Positive",
  level: "Medium",
  tags: ["sanctions", "companies", "name matching"],
  brief:
    "A client’s supplier list flagged a hit against a sanctions list entry. Your job is to find which Chinese company, if any, the entry refers to, and to document why the near-matches are not it. (List entry and companies are fictional.)",
  artifact: `
<figure class="art">
  <div class="sanc">
    <div class="sanc-k">Sanctions list entry (fictional)</div>
    <p><b>LANYAO MICROELECTRONICS (SHENZHEN) CO., LTD.</b> (a.k.a. BLUE GLORY MICRO; a.k.a. SHENZHEN LANYAO WEIDIANZI YOUXIAN GONGSI), Nanshan District, Shenzhen, Guangdong, China; Established 2019; Unified Social Credit Code <span class="mono">91440300MA5F****8R</span>.</p>
  </div>
  <table class="form" lang="zh-CN" style="margin-top:16px">
    <caption>Registry search: “蓝耀 OR 澜曜 微电子”</caption>
    <tr><th></th><th>企业名称</th><th>所在地</th><th>成立日期</th><th>统一社会信用代码</th></tr>
    <tr><th>A</th><td>深圳市蓝耀微电子有限公司</td><td>南山区</td><td class="mono">2019-04-16</td><td class="mono">91440300MA5FKQ2X8R</td></tr>
    <tr><th>B</th><td>深圳市澜曜微电子有限公司</td><td>南山区</td><td class="mono">2019-07-02</td><td class="mono">91440300MA5FL3T967</td></tr>
    <tr><th>C</th><td>深圳市蓝耀科技有限公司</td><td>福田区</td><td class="mono">2016-11-21</td><td class="mono">91440300MA5DH7W24M</td></tr>
    <tr><th>D</th><td>东莞市蓝耀微电子有限公司</td><td>东莞市</td><td class="mono">2019-05-30</td><td class="mono">91441900MA53P8R1YB</td></tr>
  </table>
  <figcaption>Fictional list entry and registry results.</figcaption>
</figure>`,
  questions: [
    {
      q: "Which candidate is the listed entity?",
      fmt: "Letter",
      h: ["0464e17a48bbfa2cca727660a5272e773cddef3ba327bafb1f9d46fad7f18220","04d8e7eb74b3241ae54a4df752ce3d97b0dfad6961bdd84c081cbc42a00a8c94","0c54e2a0e0b6c57efab0120c638736ffeae5e63ed3ceedafc643f9f151f66a95","743c2d6188f2bde85389f5731a8218038ce38f6169d5424daadbf28ddeb6865e"],
    },
    {
      q: "Which candidate is the most dangerous false positive — same pinyin, same district, same year?",
      fmt: "Letter",
      h: ["7b0afc9494f0399681e99c483e2819972c8625d4fdb9c6df9d19952c0d3ff30c","a0c457964c3987dc6c1bb00c38ab2dd693a2f918ecb93f02c2c633b76835841e","aa0ba0fcd055ca0a6979c751014d30da0d7925541591bc18169f34424f598441"],
    },
    {
      q: "What is the listed company’s trade name (字号) in Chinese characters?",
      fmt: "Two characters",
      h: ["0afe91f7c86ce4d9bae347f0722611e2be5d4f589f6cc373b8f117ba48e6bcc8","29b66fe2d63ad67c027013391e7c2ee4c86e7b41c73dfcbab196bdea0ee566cf","7f7ce9d9e717c2a372b3a53f58fcf394c7f9b38380266b11a9a07535c9a4bb5c","b4512c7e1151f0cebc27a4371143dd08f64d0e97f090fb75099a429da0972420"],
    },
  ],
  hints: [
    "“Lanyao” fits more than one set of characters. The alias “Blue Glory” is a literal translation of the trade name — which characters mean blue and glory?",
    "Use every identifier on the list entry: district, year, product words (微电子 = microelectronics) and the visible characters of the credit code. Codes beginning 914403… were issued in Shenzhen, 914419… in Dongguan.",
  ],
  learn: `
<p>Chinese companies have only one legal name — the Chinese one. English names on sanctions lists, invoices and websites are translations, transliterations or inventions, and screening tools fuzzy-match them in pinyin, which produces false positives.</p>
<ul>
  <li><b>A</b> — 蓝 (blue) 耀 (glory/shine), microelectronics, Nanshan, 2019, and the code matches 91440300MA5F****8R. <b>Match.</b></li>
  <li><b>B</b> — 澜曜 is also <i>Lányào</i>, same district and year, but 澜 means “waves” and the code ends …967. Same pinyin, different company. A pinyin-only screen would flag both A and B.</li>
  <li><b>C</b> — same 字号 but different industry (科技), district (Futian) and year (2016).</li>
  <li><b>D</b> — registered in Dongguan (441900), not Shenzhen.</li>
</ul>
<p>The structure of a company name is <b>place + trade name (字号) + industry + legal form</b>: 深圳市 + 蓝耀 + 微电子 + 有限公司. English versions often reorder it (“Lanyao Microelectronics (Shenzhen) Co., Ltd.”). Always resolve a hit to a <b>credit code</b>, and record why each near-match was ruled out.</p>`,
});
