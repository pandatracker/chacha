defineChallenge({
  id: "roc",
  zh: "民",
  title: "Republic Time",
  level: "Medium",
  tags: ["Taiwan", "dates", "companies"],
  brief:
    "A Western due-diligence report says a Kaohsiung-based supplier was “founded in 79” and “last amended in 112”. The analyst copied the dates straight from Taiwan’s company registry without converting them.",
  artifact: `
<figure class="art">
  <table class="form" lang="zh-TW">
    <caption>公司基本資料 · Company registration extract</caption>
    <tr><th>公司名稱</th><td><span class="lic-red">████</span>精密股份有限公司</td></tr>
    <tr><th>統一編號</th><td class="mono">████████</td></tr>
    <tr><th>公司所在地</th><td>高雄市前鎮區<span class="lic-red">██████</span></td></tr>
    <tr><th>核准設立日期</th><td class="mono">079年10月01日</td></tr>
    <tr><th>最後核准變更日期</th><td class="mono">112年03月08日</td></tr>
  </table>
  <figcaption>Registry extract (re-typed; company redacted).</figcaption>
</figure>`,
  questions: [
    {
      q: "On what Gregorian date was the company last amended?",
      fmt: "YYYY-MM-DD",
      h: ["2bffd8032a7bd5e04ecb5ea111cfff080188efa6ad74c59221e898c6d145171c"],
    },
    {
      q: "On what Gregorian date was the company founded?",
      fmt: "YYYY-MM-DD",
      h: ["cbf1c45d100eae3747ee3a2c5ddd5c17a2e9d1fe24f7fa6578c792881fa1a6b7"],
    },
    {
      q: "“Kaohsiung” is not Hanyu Pinyin. How is the city’s name written in pinyin?",
      fmt: "Pinyin, no tones needed",
      h: ["4ebd1793bf1aebeabbb020b1b8a9c0d19ced6eb789dc41b9d902391a30538e9c"],
    },
  ],
  hints: [
    "Taiwan’s official calendar counts years from the founding of the Republic of China (民國). Year 1 was 1912.",
    "The city is 高雄. Look up the Mandarin readings of the two characters. Taiwan’s English place names mostly use older Wade–Giles-style spellings.",
  ],
  learn: `
<p><b>Minguo (ROC) calendar.</b> Taiwanese government records — company registry, court judgements, land records, ID cards — use 民國 years: <b>Gregorian = ROC + 1911</b>. 79 → 1990, 112 → 2023. The registry often pads to three digits (079). Get this wrong and you’re off by 1,911 years — or, worse, you assume a typo and drop the record.</p>
<p><b>Taiwan romanisation.</b> Taiwan uses a mix of Wade–Giles, Tongyong and Hanyu Pinyin. Many established names keep old spellings: Kaohsiung 高雄 (<i>Gaoxiong</i>), Taichung 台中 (<i>Taizhong</i>), Keelung 基隆 (<i>Jilong</i>), Hsinchu 新竹 (<i>Xinzhu</i>). Personal names usually follow Wade–Giles with a hyphen (<i>Tsai Ing-wen</i>). Search both forms, and the traditional characters.</p>
<p>Taiwan’s company registry: <span class="mono">findbiz.nat.gov.tw</span> (search by 統一編號, the 8-digit business number, or by name).</p>`,
});
