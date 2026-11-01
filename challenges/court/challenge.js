defineChallenge({
  id: "court",
  zh: "判",
  title: "Case Number",
  level: "Medium",
  tags: ["courts", "legal records", "due diligence"],
  brief:
    "A due-diligence report on a Beijing tech company cites a lawsuit only by its case number. You found the judgment on a mirror site, but the header with the court’s name is cut off, and the appeal court has been blacked out. The case number tells you everything you need.",
  artifact: `
<figure class="art">
  <div class="doc" lang="zh-CN">
    <p class="doc-no">（2021）京0105民初12345号</p>
    <p>原告：李某，女，1990年3月出生，汉族，住北京市。</p>
    <p>被告：北京某某科技有限公司，住所地北京市。</p>
    <p>……</p>
    <p>另查明，原、被告曾就劳动合同解除问题涉诉，案号为（2020）京0108民初5678号，该案判决已发生法律效力。</p>
    <p>……</p>
    <p>如不服本判决，可在判决书送达之日起十五日内，向本院递交上诉状，并按对方当事人的人数提出副本，上诉于北京市第<span class="lic-red">██</span>中级人民法院。</p>
  </div>
  <figcaption>Judgment excerpt (fictional case; real case-number format).</figcaption>
</figure>`,
  questions: [
    {
      q: "Which court issued this judgment?",
      fmt: "Court name or its district",
      h: ["0fce005f97b2366a84a3795434636c53402b2c62b3f5e8a52a6b1c2dda2b1570","1207860f46353f8a95457d068570920555c931da6775d9d7c3f73fab3a16e4a0","1a0d84010cf500ef2e6432218df8123a90e64b0eb3d269c20ce5b8afdd8b8ec3","1efb0f31c11a5155fa1590424c100c890ff55fa3fca75547428129b2d085e58d","516e0d8e778b508dadb3442ad9d583297915efcd1f1d979b1111dd8cf31c5235","76b2efca0dc17fda61e827f6a2f2c68f147c6bd440301e9130a143ff6552096f","7b4c6f979e3ab965d41d9c5cba8efbd98679e8bf3d2c98c150a354bc7606b597","8a60175eac58b7083cbb1384454bc6949753dc46a0b75b6628f51636d3edfdc2","a900b91776673add44f29904a4c607b7e87fde1a61070bfa206fb7ba552b4dd7","c3b2782ac33f8ffeabbca5d302110a15e49c2364b54c0c8ae3bbf5a2da07b357","ca1f2f209a3bbc26271f5189d6b861f05e1d868a407516e3f8bb6df83fe4b871","df66431842e3d5af2ba6c6de264364ce9d3c2db6d6f2df7b7798af178186566f","e7d5473b94726ecc7afe2b3800f08a2d1bd2d93ddc9a31ed3d971fb6960daab7"],
    },
    {
      q: "What kind of case is it, and at what stage?",
      fmt: "e.g. criminal appeal",
      h: ["30437921a2d96736c11e6e0e31292a2174028809eaf378ba33dfa46c54d33a70","35b3d2aabeddc80b8e2ca32e21b418cdf013de58f913c1b63948380ce665f1f4","54ab7e3710358f6006ea963b809d4d731578d6f90ade7f2af3b96693ed8fb5a2","57b47f646627b8a5f720ec34f18c845bdfead94de151f2f058a83b067eeee29a","5b517b54118b6c2158788288f74dec8ac0be6a93a4141c00a46f1676c61d7ec8","5d38af1b661f1d4e33ee99687f61f3c9c4fe5a1472bfbf278ba50ce9ae1ef5aa","9f339f1b5b38f25ad4aa064e53741adb2f7e0a34470928dd438406d202171833","c04fd72921b9177863bec5e4316d36aa8f233868d1df7c8637a4eb2c670f415a"],
    },
    {
      q: "Which court decided the earlier case (2020)京0108民初5678号?",
      fmt: "Court name or its district",
      h: ["3b9ab2f9f07d13e50d313bedd6fc68c99bdd9ea6843d4b71c8516058b54abd1f","43102d3c39e36bfc2c56d03d6f2f71998d2a9b71bcec657dba7f60dcb6362df1","47e717c7d4d245966c95436fba463fecd047d2e0914cf91a3d6877d70c12be7a","5f761ca4bde142dcf23f3cedb4989f98c4d594a5c5237f4a15d8cbc43e300f42","7fd3b10e2cb8067fed2bd785804b1faa1649725f30e9be2b16110b8c66a2582d","81b7dae06f3da329309f2847768d01b428043135d43306d97b43ba86f130602d","ad0abf10650344c81116051e43ccbe9f28a53a89e16447af3830fc219dd92297","ae9ece5c6cf9555ba67b8fcf63cfdfc7a10be3976bcfb18ae197bbf76d863de2","c93a38c9c738bbb8b7707f71a484da4936d44780d46b13b636973adc9d8b47fc","efc2a9481582d355325fa2d86af14d1ece1557b66a46a5952e47fa536a4ba0ec"],
    },
    {
      q: "An appeal goes to Beijing’s No. __ Intermediate People’s Court. Fill in the number.",
      fmt: "Number",
      h: ["013e323eca534252a7288b2f0691d6d5e58b8535934adf11b5af0102876ed40e","1188fcb36c8536ac6668b93d5a4e54aa01a7557abffa90f343032350034e8645","1ccc943652694b1e1faa13093a433b0e8b97c605d63438aaa6d0b13453fb519e","2e6670827dd94d8cdc7aae236c2c75c307f1a8bc37da3a1e80b502b34edb82eb","339896648d898cc11cd75309ddb12eae99b094bf1f3a4d2074ce68147193ef19","57ce1f2694d9a3ab23a1a687e0c4e688cbb4f319777b8195fc96e60f0a0919d0","7ab4e2f2547122ade4f6089ad42e24e16f1394799b193e6c542cd109874bc726","a87ca8eece6428a80578f0f6232e9e7d6056cf13726c82eb1c8152fa4a443889","b3c4d5d65b2131ad02116370c3c6173061fc89782a849548bc59f9d4354c5081","b48e9ebb210050ba80f8ea83b3ae95825c0104404d824a1d42d2c7212c800ab8","bae896e65cf025ca96c81355d0d1dac342bec65d5c591126eadc9f934b30e390","c0a07cf1581ade86b92854710b16416fa77a5c0a0162cd898161f087ccfacb06","c9145fcb46432b4aa073020b5e05970455523d8e39bf643a8e8de8796491a78c","f161d50b8a8f8d56a160e76f8ba7243f0b5c234404a60566bda9116985711b69","f58fe38d2162c25d0c6f0983b81a3e1451496dd42d2ab316ef352f8b6d273f55"],
    },
  ],
  hints: [
    "Since 2016 case numbers follow a fixed pattern: (year)[court code][case-type code][serial]号. The court code is a province abbreviation plus digits; for district courts the digits are the last four digits of the district’s administrative division code.",
    "民 = civil, 刑 = criminal, 行 = administrative; 初 = first instance, 终 = second instance (appeal). Beijing’s intermediate courts each cover a fixed set of districts — check which one covers the first court’s district.",
  ],
  learn: `
<p>Since 2016 every Chinese case number follows the Supreme People’s Court’s format: <span class="mono">（收案年度）+ 法院代字 + 类型代字 + 案件编号 + 号</span>.</p>
<ul>
  <li><b>（2021）</b> — the year the case was filed (not decided).</li>
  <li><b>京0105</b> — the court code: 京 = Beijing, 0105 from division code 110105 = <b>Chaoyang District</b> People’s Court. 京0108 = Haidian. Intermediate courts use two digits: 京01, 京02, 京03, 京04.</li>
  <li><b>民初</b> — civil, first instance. 民终 = civil appeal; 刑初 = criminal first instance; 行初 = administrative; 执 = enforcement.</li>
</ul>
<p>Chaoyang’s appeals go to the <b>Beijing No. 3 Intermediate People’s Court</b> (京03), which covers Chaoyang, Tongzhou, Shunyi, Huairou, Pinggu and Miyun. So the appeal’s number would look like <span class="mono">（2022）京03民终…号</span>, a ready-made search string.</p>
<p>Where to look: China Judgments Online (裁判文书网, <span class="mono">wenshu.court.gov.cn</span>) — publication has declined in recent years, so absence proves little; China Enforcement Information (<span class="mono">zxgk.court.gov.cn</span>) for enforcement and blacklisted debtors (失信被执行人); and commercial databases that mirror judgments. Published judgments anonymise individuals as 某 but often keep the birth month, ethnicity, occupation and company names, which may be enough to re-identify a party. Handle such data with care.</p>`,
});
