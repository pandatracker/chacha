defineChallenge({
  id: "canto",
  zh: "粤",
  title: "Canto Mode",
  level: "Easy",
  tags: ["Hong Kong", "language", "search"],
  brief:
    "You are following a story through Hong Kong sources. Signs, forum posts and Telegram channels there are often written in Cantonese, not standard written Chinese — and machine translators and mainland search engines stumble over it. Turn the Cantonese words below into their standard Mandarin equivalents.",
  artifact: `
<figure class="art">
  <img src="{{dir}}/mtr-sign.jpg" width="1280" height="960"
    alt="Yellow station sign reading 上落車時 請小心空隙, with English 'Mind the gap when boarding & alighting'">
  <figcaption>Sign at an MTR station. Photo: Yejianfei, Wikimedia Commons, CC BY 4.0.</figcaption>
</figure>
<figure class="art">
  <div class="weibo" lang="zh-HK">
    <div class="wb-head">
      <span class="wb-av" aria-hidden="true">港</span>
      <div><b>旺角街坊</b><br><small>forum post · 2 hours ago</small></div>
    </div>
    <p><b>琴日</b><b>喺</b>旺角見到間舖頭<b>冇</b>咗，我都<b>唔</b>知係咪真嘅。</p>
  </div>
  <figcaption>Forum post (re-drawn; account fictional).</figcaption>
</figure>`,
  questions: [
    {
      q: "上落車 on the sign = ? (standard Mandarin)",
      fmt: "Chinese characters",
      h: ["32a5380643bd38022faa9f572ceecfe5a3d78bcdc868fb237cb011a29180baf0","88cca2b290d721c9aeceffb12f21d0722b1224f3f35fd07c454d18d8797cb66c","89f6f9341e40333677121e829065ea2128727a6ab1e605ca35291e3005b2b7e0","cf2083f51b27da79c3b04d0036a10077efb4980d3dc0f705b161f98f5e880d3d"],
    },
    {
      q: "喺 = ?",
      fmt: "One character",
      h: ["d9139ed2d6cc45b5b49cd515a2c563883c228a197fbb25abd5b461e4f78e6c56"],
    },
    {
      q: "冇 = ?",
      fmt: "Chinese characters",
      h: ["50e661812c6305ef531de955e352c3dd2dc24ea40ac1ce3df87a09b1cb07bb1b","836305eb85b0403b3437a123621a0607f55f45c6091fa85b1166139e4b10cc8d","a4d195f8a124f738af0cca2f1f37c07c64b7bc05bc458a9d7557433b07260c58","b4c3f6512536f39bff4012257c26ec3c4d55f99ac39642468b06d17dda9149a5"],
    },
    {
      q: "唔 = ?",
      fmt: "One character",
      h: ["fae350cac3b4ac51c3dcb84abd39b990613ca5158cf6e46b535edea35ee3f5f3"],
    },
    {
      q: "琴日 = ?",
      fmt: "Chinese characters",
      h: ["357c5d5434359eda5b961fd2c4d52ac7caacb105211058772a74255d7815cf82","b2775db26b12d0898e5fe43b5de894dbd38cba4a4607a76bb7d10f1b542f8899"],
    },
  ],
  hints: [
    "The English on the sign gives you the meaning of 上落車. In Cantonese, 落 is used where Mandarin says 下 (go down, get off).",
    "The forum post means: “Yesterday in Mong Kok I saw that a shop had disappeared; I don’t know if it’s true.” Match each bold word to its role in that sentence.",
  ],
  learn: `
<p>Hong Kong writes in two registers: <b>standard written Chinese</b> (书面语, based on Mandarin) for official texts, and <b>written Cantonese</b> for signs, ads, comics, forums (LIHKG), WhatsApp and Telegram. Written Cantonese uses its own words and characters:</p>
<ul>
  <li>上<b>落</b>車 → 上<b>下</b>车 (get on and off); 落雨 → 下雨</li>
  <li><b>喺</b> → <b>在</b> (at, in) · <b>冇</b> → <b>没有</b> (not have) · <b>唔</b> → <b>不</b> (not) · <b>琴日</b> → <b>昨天</b> (yesterday)</li>
  <li>Also common: 係 = 是, 嘅 = 的, 咗 = 了, 佢 = 他/她, 睇 = 看, 嘢 = 东西, 乜嘢 = 什么, 點解 = 为什么, 呢度 = 这里</li>
</ul>
<p>Why it matters for OSINT: keyword searches in standard Chinese miss Cantonese posts (search <i>冇</i> as well as <i>没有</i>), machine translation often garbles them, and Hong Kong names and places are romanised from Cantonese (旺角 = <i>Mong Kok</i>, not <i>Wangjiao</i>). Dictionaries such as CantoDict and words.hk help.</p>
<p class="hint">Photo source: <a href="https://commons.wikimedia.org/wiki/File:Cantonese_at_MTR_station,_Hong_Kong.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (Yejianfei, CC BY 4.0).</p>`,
});
