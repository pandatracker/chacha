defineChallenge({
  id: "cities",
  zh: "市",
  title: "City Within a City",
  level: "Medium",
  tags: ["addresses", "administrative divisions"],
  brief:
    "Your supplier list has three Chinese addresses. A colleague plotted “Yiwu City” and “Kunshan City” as separate cities from the big cities next to them and is confused by what “街道” means. In China, “city” (市) exists at several levels.",
  artifact: `
<figure class="art">
  <div class="clip" lang="zh-CN" style="font-family:var(--sans)">
    <div class="clip-k">Supplier addresses</div>
    <ol>
      <li>浙江省义乌市稠城街道<span class="lic-red">█████</span>号</li>
      <li>江苏省昆山市玉山镇<span class="lic-red">█████</span>号</li>
      <li>广东省深圳市南山区粤海街道科技园<span class="lic-red">█████</span>号</li>
    </ol>
  </div>
  <figcaption>Addresses from purchase orders (house numbers redacted).</figcaption>
</figure>`,
  questions: [
    {
      q: "Which prefecture-level city administers Yiwu?",
      fmt: "City name",
      h: ["1b08c6abc8fb1cf1361b309d78b5125286c97a7515693578eae8f230ffbc6999","70820d4d1a8ff8fdaa5bc15025bb777683451b75c049999bbeb828c9f9cd31aa","c30611727800d5f56ce0654c29530ae1aedbe091ce6a4dae4b89ee9562f8761e"],
    },
    {
      q: "Which prefecture-level city administers Kunshan?",
      fmt: "City name",
      h: ["5f335ba706214112a8140657d110814013d64aac03f61553d55fbf430389d67d","b535f41449157b565fcb8fa221f8346a6da7a7c631136a16b2f11572fdd429a1","b65f532cf9c6fd8f00e2dbd20d4298344557e319b94ae46aa722c01a4ec16dad"],
    },
    {
      q: "In address 3, what is the township-level unit?",
      fmt: "Name (pinyin or characters)",
      h: ["03b8cd7fae36bc05893584dbb6961d98a9c0db545a4f874f804f817e544af745","0ba5ffd4546966c3b8c4233ef4d5029289c244b70ff5a23dec87a417af7bda54","2cef36c0c0d5890fc5d57ba4ef29fde3130c518482d51fb72726f1db5d9946fb","361557263d6340f7c7a30b0b0f77d07ad1fa4b819e015c284ecd997c41c7d50a","47ad0d8ac82c386eb39c1a688b353e354208851e64273e8203ea09e5bccd6b1e","6af9360d7bdeb3b78a0159f9e906f39364a1faa9043b9961a7fb6c1fb592062f","ac63726f4024db201337f0992e29de6e2f4f0453a6c4f471749f08e2a47e55d1","f1786409bea0442784dee6e7a349b5e72739dc81bcf0d2ba0d4e018307b4afb0"],
    },
  ],
  hints: [
    "Chinese addresses run from largest to smallest: province → prefecture → county → township → street. Yiwu and Kunshan are county-level cities; the prefecture is left out of the address.",
    "Look up 义乌 and 昆山 on Chinese Wikipedia or Baidu Baike — the infobox gives the 上级行政区. Township-level units end in 镇 (town), 乡 (township) or 街道 (subdistrict).",
  ],
  learn: `
<p>China has five administrative levels, and “市” appears in three:</p>
<ul>
  <li><b>Province-level</b>: provinces, autonomous regions and four municipalities (Beijing, Shanghai, Tianjin, Chongqing — Chongqing is roughly the size of Austria).</li>
  <li><b>Prefecture-level</b> 地级市: e.g. Jinhua 金华, Suzhou 苏州, Shenzhen 深圳 — covering cities <i>and</i> their countryside.</li>
  <li><b>County-level</b> 县级市 / 区 / 县: e.g. Yiwu (under Jinhua), Kunshan (under Suzhou), Nanshan District (in Shenzhen).</li>
  <li><b>Township-level</b>: 镇 town, 乡 township, <b>街道 subdistrict</b> — e.g. 粤海街道 Yuehai Subdistrict in Nanshan.</li>
  <li>Village-level: 社区 / 村.</li>
</ul>
<p>Addresses often skip the prefecture for county-level cities (浙江省义乌市, not 浙江省金华市义乌市). “Yiwu City” and “Jinhua City” overlap, they aren’t neighbours. The six-digit division code shows the nesting (Yiwu’s code begins 3307, Jinhua’s prefix). Also, 街道 here is an administrative unit, not a street — machine translators often get this wrong.</p>`,
});
