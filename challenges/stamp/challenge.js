defineChallenge({
  id: "stamp",
  zh: "印",
  title: "Proof of Presence",
  level: "Hard",
  tags: ["photo forensics", "geolocation", "coordinates"],
  brief:
    "A construction company pays inspectors per site visit, verified by photos from a watermark camera app (水印相机) that stamps time, address and coordinates onto each image. This check-in claims a project office on Fuhua 3rd Road in Futian, Shenzhen. Audit it.",
  artifact: `
<figure class="art">
  <a href="{{dir}}/watermark-checkin.jpg" target="_blank" rel="noopener"><img class="wide" src="{{dir}}/watermark-checkin.jpg" width="1600" height="901"
    alt="Photo of a large hall with a honeycomb-patterned ceiling, tall glass walls, rows of olive-green seats and a large white sculpture; a watermark stamp at the lower left reads 09:12, 2025-09-13 星期五 多云 29℃, 深圳市福田区福华三路 · 华富项目部, 经度 113.815895 纬度 22.636522, 海拔 6.0m 现场巡检打卡; a yellow badge reads 水印相机 · 已验证"></a>
  <figcaption>Check-in photo (click to enlarge). Base photo: Renek78, Wikimedia Commons, CC0; watermark added for this challenge (fictional).</figcaption>
</figure>`,
  questions: [
    {
      q: "Which coordinate system are the stamped coordinates almost certainly in?",
      fmt: "System name",
      h: ["06d1af26f817d6e3325364f7c3c56a2b54c45360430de55253e4e70c5b037131","0c45a347dda1585fccda6cf3d89be4ddb1f96c00b22a44f2898a40b4b85928f7","47b97f8bbdd77ef86d7396d1737204c8c8dce992ff6916718afbc9b9b33b9c84","7a62f6e613a7bcf1989044a72af775f6080edf66c1ddcc8b130b468e8820e71e","7c5d7d41a0052eb5d165e39c06bc2935de57b13c27cb175e20c4e739bcd69084","dbff2f98bb69100ae62859b122844d57f38186042f28bf95a85276ecbb7ec4f6","fa4d5c4be2156496bc27cdde57bf45695251c7bb73cc3ef1933cfcc01bac0acd"],
    },
    {
      q: "Where do the coordinates (and the photo) actually put the inspector?",
      fmt: "Place name",
      h: ["0c37d5cb6963cdeb954793c06ecdd9aaf54a8413e685fc729d343d464632d9ae","1c3e6ac6831d9f01f93199d4d58950ea975cc786d4921941598f238d787bc544","58e6d03ca716a2ff84bba22a895502fbde8a2519c188b05cd417c3f2f1ff5294","793a8ab8cf31ae537404fa58f8e673d21a75908947d5687450a93298bf61aa52","85d74db8cfa0ac2040d7eaf42c2305ab2163b82e393c85015b48e44e54a6dcc2","8d0d7ecb14a0ade2a2782365ff4a6bb06da51a1f6f79551d962326be3a3081f9","8e7ec87d8bb8efe152f5f0341f9423adf955a5c23df4c038184395c7333de042","91dbbe8f717cd1678bd654238de5d3047d145dd9d0de5e78ac2bb5cfe6bc1ccc","b7c75614849174d45d57178b90ca336d41a6b942136dc329a2d18fe055146115","bda740c3e70ec3a93df64895bc5d27453965b68e4c5548e5e29f663e1484311b","c36b79165eb8f5fa9c7ca1daae6956f1f41cd177dc1333b3777fa8918ddffa2d","c6219beb55ab7f3ca3f6980363d442f488cd53bdba44653a25879c4259cb6596","d25c81e5b1812f86976e4282a370470e14e9c26187f297d9dd2d778b02c020ee","d7b1f44abda5cc2a812c3483984e5eb52415b091e59b7b016e96d775b246ea88","f75b7d96df747a56a0ae5a5926db0a994065f37611ac30b412752fa9b0e5cbdf","fa8a28254a52ff61ea4e0dd0b810637b92790c85bce82d416d67363c28871ad0"],
    },
    {
      q: "Which district of Shenzhen is that?",
      fmt: "District name",
      h: ["128bada84444b273816d9d1c6e905d5728d2153c478d6964060bf59e86992e5b","5103319282946edb20b1fbae2dfaf79c719bc166331e55fdfcefb3e16f5aec39","59d0c1d481e430ad9ea715f5b7d6e78159e80c65b5e8f9ee6b75277d30fb6e48","7cfa582d02aaf37621b84b7932296f14959f50c7699b11c0241ba83019a4b303","cbf1c5de5bde1ded25faedf6c60e94aa0cac812c19ad31bbcdd28c584cb15a9f","db9dac0096b66a7e6c9e04ccacce86fc9fe3278516f88e175f7b4144ba74306e"],
    },
    {
      q: "The stamp says 星期五 (Friday). What day of the week was the stamped date really?",
      fmt: "Day of the week",
      h: ["28fa9e0fc254454684c8c81333fca6931326f548c55cb0b1a5cdb9288999a8fe","992d14210dbeb318a709c3f5639a553f6fe9f673c377816ac38a0b0a17594a73","a502547a85d4086f812125751246e8c5d34626af7f5b65c32c73b9d9c4c7a3e6","b7fdd5b4f56b6b9d03587b0a205e27e8702675ac4021520380dd4932f6630b53","e2978836aaaf74b2117df85a63a08855f2c710d4ac93e30c286b23d8b1d841e1","e6ef3a930ba330b83ea989b78eedc9623464394d896305a9b1fb44df98ba5f3f","f95cfe0d70783a3e09b4421b17fc7d02f67ca8bea9b36f20ca8b926609242bb5"],
    },
  ],
  hints: [
    "Watermark apps in China get their location from Amap, Tencent or Baidu location services, so the coordinates are rarely raw WGS-84. Convert them before putting them on satellite imagery — and compare them with the address text.",
    "Check every field of the stamp against every other field, and against the picture: does the weekday match the date? Does the room look like a site office? Does the light outside look like 09:12?",
  ],
  learn: `
<p>Watermark camera apps (今日水印相机 and others) are used across China for attendance and site check-ins. Their stamps look authoritative, but each field comes from somewhere different — phone clock, location service, reverse-geocoded address, typed project name — and many can be edited or recreated. Audit them field by field:</p>
<ul>
  <li><b>Coordinates</b>: in <b>GCJ-02</b>, like everything from Chinese location services. Converted to WGS-84 (≈ 22.6394, 113.8108) they fall on <b>Shenzhen Bao’an International Airport</b>, in <b>Bao’an District</b>, about 30 km from the claimed address in Futian.</li>
  <li><b>Address text</b>: typed or picked from a list, not derived from the coordinates. It contradicts them.</li>
  <li><b>Picture</b>: the honeycomb ceiling and glass wall are Terminal 3 of Shenzhen airport, a quick reverse-image or landmark search.</li>
  <li><b>Weekday</b>: 13 September 2025 was a <b>Saturday</b>, not 星期五. Apps compute the weekday automatically, so a mismatch means the stamp was edited or faked.</li>
  <li><b>Light</b>: the sky outside looks like dawn or dusk rather than mid-morning.</li>
</ul>
<p>Some apps offer verification (防伪) codes or server-side records that can confirm a genuine stamp. Ask for the original file and its metadata, not a screenshot.</p>
<p class="hint">Base photo: <a href="https://commons.wikimedia.org/wiki/File:Shenzhen_Bao%27an_International_Airport_Terminal_3_in_September_2025.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (Renek78, CC0). The stamp, company and project are fictional.</p>`,
});
