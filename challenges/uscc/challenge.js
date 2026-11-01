defineChallenge({
  id: "uscc",
  zh: "照",
  title: "Smudged Licence",
  level: "Hard",
  tags: ["companies", "registrations", "checksums"],
  brief:
    "A supplier sent a photo of its business licence (营业执照) to prove it is legitimate. The last character of its Unified Social Credit Code is under a smudge. Before searching the registry, work out what you can from the code itself.",
  artifact: `
<figure class="art">
  <div class="lic" lang="zh-CN">
    <div class="lic-h">营 业 执 照</div>
    <div class="lic-sub">（副　本）</div>
    <dl>
      <dt>统一社会信用代码</dt><dd class="mono lic-code">91310115MA1K3R7T4<span class="smudge">?</span></dd>
      <dt>名　　称</dt><dd>上海<span class="lic-red">██</span>贸易有限公司</dd>
      <dt>类　　型</dt><dd>有限责任公司（自然人投资或控股）</dd>
      <dt>法定代表人</dt><dd><span class="lic-red">███</span></dd>
      <dt>注册资本</dt><dd>人民币100.0000万元整</dd>
      <dt>成立日期</dt><dd>2021年06月08日</dd>
      <dt>住　　所</dt><dd><span class="lic-red">████████████████</span></dd>
    </dl>
    <div class="lic-seal" aria-hidden="true">登记机关</div>
  </div>
  <figcaption>Business licence photo (re-drawn; fictional company).</figcaption>
</figure>`,
  questions: [
    {
      q: "In which district was the company registered?",
      fmt: "District name",
      h: ["0c5ffad7fc7c54e3738df4d6d904f0c86c0a1f4eb05ad3ae3848469b37b8ca2a","122b8b22e064b02ae5f1180f968ff2f67bfeade11ec33c912ddb2fa2c406fced","2f57e54f3d093cb7cc6056985c7442fe17c05580b9e146d1f07daaeb583b9b83","329056556d5d690eac05ef21f07a1b09582283a792f833677f63412816589af7","41951f85eba248e508729cc889fbb17db3b7d5beba273b24c01a9dbe2aac38cb","73e788079308df72a221888750342ff405de34ea2220c8a189bdf3114e488876","78c8ff77f3f6182d8a93c536274607ace8aade2ddfced849e56f6a799dcf57e1","93bc4588eb6d37f9bb41b4de87500f8a8bb8ebf0acbcb5b392180314401dd713","ce4b77aaf0ac18e43aa2b6be4273774209119c295a48ebeb06d0badf99b86ab5"],
    },
    {
      q: "What is the smudged 18th character?",
      fmt: "One character (0–9 or a letter)",
      h: ["6b8041523e13db35bf1ed3e251cd083df1e826a8802b31738d4c2cd725da1a58"],
    },
  ],
  hints: [
    "The code is defined by the national standard GB 32100-2015. Characters 3–8 are a familiar six-digit code.",
    "The 18th character is a check character computed modulo 31 over the first 17. The standard (or many write-ups of it) gives the character set and weights — 1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28.",
  ],
  learn: `
<p>Since 2015 every Chinese organisation has an 18-character <b>Unified Social Credit Code</b> (统一社会信用代码):</p>
<ul>
  <li><b>1</b> — registering authority (9 = market regulation, i.e. businesses; 1 = government bodies; 5 = civil affairs, i.e. NGOs…)</li>
  <li><b>2</b> — entity type (for 9: 1 = enterprise, 2 = individual business 个体工商户, 3 = farmers’ cooperative)</li>
  <li><b>3–8</b> — administrative division code of the registering office (310115 = Pudong New Area, Shanghai)</li>
  <li><b>9–17</b> — organisation code</li>
  <li><b>18</b> — check character. Map 0–9 to 0–9 and A–Y (no I, O, S, V, Z) to 10–30, multiply by the weights, sum; check = 31 − (sum mod 31), with 31 → 0.</li>
</ul>
<p>Checksums let you <b>repair one smudged or mistyped character</b> and spot forged licences: a code that fails the check was never issued. Then look the code up in the National Enterprise Credit Information Publicity System (<span class="mono">gsxt.gov.cn</span>) or commercial databases (Qichacha, Tianyancha, Aiqicha) for the legal representative, shareholders and address.</p>
<p class="caveat">A registered district is not necessarily where the company operates. Pudong and other zones host many companies registered at a shared virtual address.</p>`,
});
