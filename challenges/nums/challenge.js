defineChallenge({
  id: "nums",
  zh: "万",
  title: "Ten Thousand Problems",
  level: "Medium",
  tags: ["numbers", "finance", "documents"],
  brief:
    "You are checking a local news report about a new factory and an excerpt of its construction contract. Chinese counts in units of 10,000, measures land in its own unit, and writes contract amounts in anti-fraud “capital” numerals.",
  artifact: `
<figure class="art">
  <div class="clip" lang="zh-CN" style="font-family:var(--sans)">
    <div class="clip-k">本地新闻</div>
    <p>据悉，该项目总投资<b>3.2亿元</b>，占地<b>120亩</b>，注册资本5000万元，预计明年投产。</p>
    <div class="clip-k" style="margin-top:14px">施工合同（节选）</div>
    <p>合同总价款：人民币（大写）<b>壹佰贰拾叁万肆仟伍佰元整</b>（¥ ________ ）</p>
  </div>
  <figcaption>News excerpt and contract excerpt (fictional project).</figcaption>
</figure>`,
  questions: [
    {
      q: "What is the total investment, in yuan?",
      fmt: "Digits only, e.g. 1500000",
      h: ["4266fad0b2ec224d6678f0965d19f1ee4c9cdb65d779da43567d1dc6dbe07773"],
    },
    {
      q: "What is the site area, in square metres?",
      fmt: "Digits only",
      h: ["07473ab37ce515ab2c7f9ba7eb8b9a19fbce38569d50cf3e27d674aa5718682f","28073971cce3cdad41b84782152c8f3ca900068a6a533e8784b18571571b15bd","732dc26bc837757a5985ea927d789b64ac1ad8b318bd0d02b4d0ebf30a6bd3f6","984903e79c332b229f0da09971c2f21675f2593f4d316ed248bfe63d4ae77fff","bbdb0fa8bcbb2c3f0ee3b80e88e935aac31119079f90c95e1f41603d819a9a3d"],
    },
    {
      q: "What amount belongs in the blank (¥) on the contract?",
      fmt: "Digits only",
      h: ["0806fb563457c61aa8a7d20ae777abe2b3687d5c3406bb8e0eaa882db5b1911d"],
    },
  ],
  hints: [
    "万 = 10,000 and 亿 = 100,000,000 (10,000 × 10,000). Western “million” falls in the middle of the Chinese system, which is where mistakes happen.",
    "亩 (mu) is a traditional land unit: 15 mu = 1 hectare. Capital numerals: 壹1 贰2 叁3 肆4 伍5 陆6 柒7 捌8 玖9 拾10 佰100 仟1000.",
  ],
  learn: `
<p>Chinese groups numbers by <b>four digits</b>: 万 (10<sup>4</sup>) and 亿 (10<sup>8</sup>). 3.2亿 = 320,000,000 (320 million), 5000万 = 50,000,000. Mixing these up gives errors of 10× or 100× — a classic mistake in reporting on Chinese investment, sanctions exposure or company capital.</p>
<p><b>Land</b> is measured in 亩 <i>mu</i>: 1 mu = 666.67 m², so 120 mu = 80,000 m² (8 ha). You’ll also meet 斤 <i>jin</i> = 500 g and 公里 = km.</p>
<p><b>Capital numerals</b> (大写数字: 壹贰叁肆伍陆柒捌玖拾佰仟) are mandatory on contracts, invoices and cheques because they can’t be altered with a stroke of the pen. 壹佰贰拾叁万 = 1,230,000 and 肆仟伍佰 = 4,500, so the total is 1,234,500. Always compare the 大写 amount with the digits — a mismatch is a red flag.</p>
<p class="caveat">Also note: registered capital (注册资本) is often subscribed rather than paid in, so it says little about real assets.</p>`,
});
