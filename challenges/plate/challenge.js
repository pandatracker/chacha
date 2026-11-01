defineChallenge({
  id: "plate",
  zh: "牌",
  title: "Plate Spotting",
  level: "Easy",
  tags: ["vehicles", "geolocation"],
  brief:
    "A source sends you a photo of two cars in a car park, parked side by side. The only useful detail is their number plates. Where is each car registered?",
  artifact: `
<figure class="art">
  <img src="{{dir}}/plate-carpark.jpg" width="1280" height="960"
    alt="Car park: a silver Mercedes with blue plate 粤T·239N1 next to a black Hongqi sedan with blue plate 鄂F·A09A1; apartment blocks behind">
  <figcaption>Photo: HHAFOL Moratim LUNG, Wikimedia Commons, CC0.</figcaption>
</figure>`,
  questions: [
    {
      q: "In which city is the silver Mercedes (left) registered?",
      fmt: "City name, e.g. Beijing",
      h: ["56a889ade19c617ab7f412762e7a7d86c723da2eb7912e04ceb218eb240fd637","5be49ecde21d4b4e7866edb8700ef57decd840b0606e2d2f3517c944713a2dc0","7f800baba54874dd3ed3a055cf07608bbef52df0e8815bceb9bd759921c77dca"],
    },
    {
      q: "In which city is the black Hongqi (right) registered?",
      fmt: "City name",
      h: ["1d6dd983791cebc06b94c22129cbf7fecd7ef6bb1be32850a78e248849cf048b","52e8dda4428721f13d4739a9a1b194b733a8d692beeae6a226f6ba72477770f0","54136a5381970ef0704a64069a352364dc096a1d6b8476cede9cd8183dd62218","644866e23d42849dc6196f17a0563c937f3a575834629d5a0ba64fc778e01c79","dc2ee7a52a42a11db39d3c52d412250e03a6368093f997ed7ce2031d4622c49f","f2d1a901c04676eafed5af27ddc0206fb642be584b22223064c2aa29807c1dfe"],
    },
  ],
  hints: [
    "The first character on a mainland plate is the one-character abbreviation (简称) of a province-level region. The two cars come from different provinces.",
    "The letter after it identifies the issuing city within that province. Look it up in a table such as Chinese Wikipedia’s 中华人民共和国民用机动车号牌 article.",
  ],
  learn: `
<p>Mainland civilian plates follow the pattern <b>[province abbreviation][city letter]·[serial]</b>. The province abbreviation is a single character, often an old name: 京 Beijing, 沪 Shanghai, 粤 Guangdong, 川 Sichuan, 浙 Zhejiang, 鄂 Hubei, 苏 Jiangsu, 鲁 Shandong.</p>
<p>The letter is assigned by the provincial traffic police. A is almost always the capital (粤A = Guangzhou, 鄂A = Wuhan); the others don’t follow any national pattern. Here <b>粤T = Zhongshan</b> and <b>鄂F = Xiangyang</b>, Hubei.</p>
<p>The colour matters too: <b>blue</b> means a small vehicle, <b>yellow</b> a large vehicle or learner car, <b>green</b> (with 6 serial characters) a new-energy vehicle — there are several in the background — <b>white</b> police or military, and <b>black</b> a foreign-owned or cross-border vehicle.</p>
<p class="caveat">A car is registered where its owner lives, not where it’s driving. This photo was taken in a car park in Zhongshan: the Hongqi is 1,000 km from home. Out-of-province plates (外地车牌) are common, so a plate is evidence about the owner, not the location.</p>
<p class="hint">Photo source: <a href="https://commons.wikimedia.org/wiki/File:GD_%E5%BB%A3%E6%9D%B1_ZS_%E4%B8%AD%E5%B1%B1%E5%B8%82_Zhongshan_%E6%9D%B1%E5%8D%80_Dong_District_%E8%88%88%E6%94%BF%E8%B7%AF_XingZheng_Road_car_parking_August_2024_R12S_01.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (CC0).</p>`,
});
