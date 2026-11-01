defineChallenge({
  id: "waybill",
  zh: "单",
  title: "Privacy Waybill",
  level: "Easy",
  tags: ["phone numbers", "logistics"],
  brief:
    "A seller on a second-hand marketplace shared a photo of a shipping label as “proof of dispatch”. Chinese couriers print “privacy waybills” (隐私面单) that mask names, addresses and phone numbers — but not all of each number.",
  artifact: `
<figure class="art">
  <div class="waybill" lang="zh-CN">
    <div class="wb-top"><span class="wb-brand">■■速运</span><span class="wb-tag">隐私面单</span></div>
    <div class="wb-barcode" aria-hidden="true"></div>
    <div class="wb-no">运单号 7731 0284 5519 06</div>
    <div class="wb-row"><span class="wb-k">收</span><div><b>张**</b>　139****5821<br><span class="wb-mask">**省**市**区************</span></div></div>
    <div class="wb-row"><span class="wb-k">寄</span><div><b>李**</b>　027-****6618<br><span class="wb-mask">**省**市**区************</span></div></div>
    <div class="wb-foot"><span>托寄物：服饰</span><span>件数：1</span><span>计费重量：0.8kg</span></div>
  </div>
  <figcaption>Photo of the shipping label (re-typed for legibility).</figcaption>
</figure>`,
  questions: [
    {
      q: "The sender gave a landline. In which city is that landline?",
      fmt: "City name",
      h: ["34e7c8c1996eda83ff5b1b4627fbf4c3deda9a94f3ab0d4d8c48025783c777d1","428dfad0f706824111a94ee71d48d3d291fe2c2c963712fb33038b1919352c22","954d97ca3c51733352b798d7ad62246a5ea3bea971aa9fca5a132a5f8489987c","9fa381fbb4d98ba8b9dd83401302ef7c036004622b748267471e38892573f4d6"],
    },
    {
      q: "Which mobile operator originally issued the recipient’s number?",
      fmt: "Operator name, e.g. China Unicom",
      h: ["240ac7f0a6197cf3dc2e49aa45b445f7c2535dcaae1b0b4da73248e62603dc70","32b2fd5abcbf733b54f6b0f72c9d4912f2a3d6698defd1bd10cefba9bcd9b6b8","3da10f41444bd20840e0e7df21e5e50b7c25a980e6db1157c8dc41f1c3b2a671","466b2605b2fce9794cb9a22138ebb63c9e4c424a6445da30c104615550585506","510f1a3e679ed52d78a7a434602a8aea0a64682607ed987d0e5a83e2f00c9452","8aa6467d76096c6738a5ea6f49bbe5383b0d5ac72e54244594043946417c6a72","968e875cb906762787b34d41e9dcb43977f87da12e4f6fea8fa980b39ed1d4f2","a5b3c1f12aa474d7ccade8d73b14cef310c51f9d80a96e5166b23d5fe2c5d447"],
    },
  ],
  hints: [
    "Chinese landlines start with an area code (区号) beginning with 0. Major cities have three-digit codes (010, 02x); others have four (0xxx).",
    "Mobile numbers are 11 digits, and the first three digits (号段) were allocated to a specific operator.",
  ],
  learn: `
<p><b>Area codes.</b> The two-digit-after-zero codes belong to the biggest cities: 010 Beijing, 020 Guangzhou, 021 Shanghai, 022 Tianjin, 023 Chongqing, 024 Shenyang, 025 Nanjing, 027 Wuhan, 028 Chengdu, 029 Xi’an. Everyone else has 0 + three digits (0755 Shenzhen, 0571 Hangzhou…). Search <i>区号 027</i> to confirm any code.</p>
<p><b>Mobile prefixes.</b> The first three digits identify the operator that was allocated the block: e.g. 134–139, 150–152, 182–184, 198 China Mobile; 130–132, 155–156, 185–186 China Unicom; 133, 153, 180–181, 189, 199 China Telecom. The next four digits (masked here) narrow it to a province and city — search <i>手机号码归属地</i> for lookup services.</p>
<p class="caveat">Mobile number portability (携号转网) has existed nationwide since 2019, so the prefix tells you who issued the number, not who serves it today.</p>`,
});
