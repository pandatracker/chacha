defineChallenge({
  id: "ubo",
  zh: "股",
  title: "Who Really Controls It?",
  level: "Expert",
  tags: ["companies", "beneficial ownership", "due diligence"],
  brief:
    "A client wants to know who is behind a Shenzhen technology company. You pulled the shareholder records of the company and of every entity above it. Work out the look-through ownership and who controls it. A Western report names the legal representative as “the owner” — check that.",
  artifact: `
<figure class="art">
  <div class="regs" lang="zh-CN">
    <table class="form">
      <caption>① 深圳<span class="lic-red">██</span>科技有限公司 · 法定代表人：王建</caption>
      <tr><th>股东</th><th>股东类型</th><th>持股比例</th></tr>
      <tr><td>宁波青松创业投资合伙企业（有限合伙）</td><td>合伙企业</td><td class="mono">55%</td></tr>
      <tr><td>王建</td><td>自然人</td><td class="mono">30%</td></tr>
      <tr><td>刘芳</td><td>自然人</td><td class="mono">15%</td></tr>
    </table>
    <table class="form">
      <caption>② 宁波青松创业投资合伙企业（有限合伙） · 执行事务合伙人：深圳青松管理咨询有限公司</caption>
      <tr><th>合伙人</th><th>合伙人类型</th><th>出资比例</th></tr>
      <tr><td>深圳青松管理咨询有限公司</td><td>普通合伙人</td><td class="mono">1%</td></tr>
      <tr><td>王建</td><td>有限合伙人</td><td class="mono">59%</td></tr>
      <tr><td>刘芳</td><td>有限合伙人</td><td class="mono">40%</td></tr>
    </table>
    <table class="form">
      <caption>③ 深圳青松管理咨询有限公司 · 法定代表人：赵明</caption>
      <tr><th>股东</th><th>股东类型</th><th>持股比例</th></tr>
      <tr><td>赵明</td><td>自然人</td><td class="mono">100%</td></tr>
    </table>
  </div>
  <figcaption>Registry extracts (re-typed; all entities and people fictional).</figcaption>
</figure>`,
  questions: [
    {
      q: "What is 王建’s total look-through (direct + indirect) equity stake in company ①?",
      fmt: "Percentage, e.g. 12.5",
      h: ["6cae5b2b617bc466d9f54b214a11548b7266daeb14dff08c8250806c3ba7fba2"],
    },
    {
      q: "Who is the actual controller (实际控制人) of company ①?",
      fmt: "Name in characters or pinyin",
      h: ["4e92e24f1231acaa4071c6181d437f60010614f81f434447155d5ced5d501953","904e312bb8febb281047cea9021f8dd9eb556a8fe8309a2d91e27813921ade7f","c25460668792a913ecb6603565184d507930073e8b4f5ccb5f2e1e8056af304d","ca34001ce98e2a12068d8138c0993bfd3498da8c35de54183de0fb4b4ac996eb"],
    },
    {
      q: "What is 刘芳’s total look-through equity stake in company ①?",
      fmt: "Percentage",
      h: ["2339344001e9f4c65d99324a4626360005c7a31d1c70c63ba4d75648c1c790e1","713f23d05d88eb852ba68d46a6808f1c3dc90902c27a9e081d53245d6526ba1d","bd9e42a9c4d9c9bc47c9f4bfc5cca1fd57e564dd05fe6d89ba0622229dce7378"],
    },
  ],
  hints: [
    "Look-through equity: multiply stakes along each path and add the paths. 王建 holds part of ① directly and part through the partnership.",
    "In a Chinese limited partnership (有限合伙), the limited partners (有限合伙人) put in money but have no say in management. The general partner (普通合伙人), usually also the 执行事务合伙人, runs it and votes its shares — whatever its stake. Who controls the general partner?",
  ],
  learn: `
<p><b>Ownership ≠ control.</b> Here the stakes work out like this:</p>
<ul>
  <li>王建: 30% direct + 55% × 59% = <b>62.45%</b> economic interest — the largest owner, and the legal representative.</li>
  <li>刘芳: 15% + 55% × 40% = <b>37%</b>.</li>
  <li>赵明: 55% × 1% = 0.55% — yet 赵明 owns the general partner, which votes the partnership’s 55% block. That is a majority of the votes, so <b>赵明 is the actual controller</b>.</li>
</ul>
<p>This set-up — a limited partnership with a tiny GP holding the controlling block — is very common in China: founder control platforms, employee share-ownership platforms (员工持股平台), and investment vehicles registered in zones such as Ningbo Meishan or Gongqingcheng. Listed companies must disclose their 实际控制人; commercial databases (Qichacha, Tianyancha) show “equity penetration” charts (股权穿透图) and flag suspected controllers, but check the logic yourself.</p>
<p class="caveat">The <b>legal representative</b> (法定代表人) is a formal signing role, often held by a manager or a nominee. It tells you nothing about ownership. Mistaking it for the owner is one of the most common errors in Western reporting on Chinese companies.</p>`,
});
