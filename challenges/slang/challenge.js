defineChallenge({
  id: "slang",
  zh: "梗",
  title: "yyds",
  level: "Easy",
  tags: ["social media", "language", "search"],
  brief:
    "You are monitoring comments under a viral restaurant post. Machine translation gives you nonsense, because half the thread is pinyin initials and puns. Rewrite each expression as the standard Chinese phrase it stands for.",
  artifact: `
<figure class="art">
  <div class="weibo" lang="zh-CN">
    <div class="wb-head">
      <span class="wb-av" aria-hidden="true">火</span>
      <div><b>吃货老王</b><br><small>06-02 20:14 · IP属地：重庆</small></div>
    </div>
    <p>新开的这家火锅 <b>yyds</b>！！🔥🔥</p>
    <div class="cmts">
      <div><b>小鱼不吃鱼：</b><b>xswl</b> 老板听说是你生日直接送了一盘毛肚</div>
      <div><b>momo：</b>看到账单我真的<b>蚌埠住了</b> 😭</div>
      <div><b>阿杰_cd：</b><b>nsdd</b>，但我下周还要去</div>
    </div>
  </div>
  <figcaption>Comment thread (re-drawn; accounts fictional).</figcaption>
</figure>`,
  questions: [
    {
      q: "yyds = ?",
      fmt: "Chinese characters",
      h: ["1d9142485771b73b57c3aba958423b81f1a56fd5424f2fcade29b6ab40d69eef","de22d4e72318865f411dc132b9067d41700a4f66c9dee8d4de65fdd13a8fc3e3"],
    },
    {
      q: "xswl = ?",
      fmt: "Chinese characters",
      h: ["60bff76d8a85e4024884d926cdfd93bca487f73bb56f6930d71e13c416c11e09","7144a5817eb6b45bbf4044aae1706ac5c111314aefad8fedad0d2607647d3fdf"],
    },
    {
      q: "蚌埠住了 = ?",
      fmt: "Chinese characters",
      h: ["512613a175af0e9c2f5eff32f0c4a2392c8cefd2f722fe8cf5b5c20b3e43a8df","b02909ea597dbff42dc5d98bb3851b38ceb1f163c143c85dd1e6d58a6b3e08e3"],
    },
    {
      q: "nsdd = ?",
      fmt: "Chinese characters",
      h: ["0f1ce0c7d92f2c49599f66f1f287d42defc41e046c706f12afaddf2332f99b01","2cd9b88944f49e87da32d16a8c9fc8510ea30c9d7f0f086e58952bd0a1d4a9fe","f0746c76b9384da7a4dc6e5eee7140f0b09d336f38093fdcf51ab7d1e5db66f7","fecd40d2880e815d9f1b891db57f8e79b0e8008dd7672e8cefb9951e8ae324c3"],
    },
  ],
  hints: [
    "Strings like yyds, xswl, nsdd are the pinyin initials of a four-character phrase. Search them on Baidu or Baidu Baike — they are well documented.",
    "蚌埠 is a city in Anhui, pronounced bèngbù. Say “蚌埠住了” aloud and think of a phrase meaning “I can’t hold it together”.",
  ],
  learn: `
<ul>
  <li><b>yyds</b> = 永远的神 <i>yǒngyuǎn de shén</i>, “eternal god”, i.e. the GOAT.</li>
  <li><b>xswl</b> = 笑死我了 <i>xiào sǐ wǒ le</i>, “I’m dying of laughter”.</li>
  <li><b>蚌埠住了</b> = 绷不住了 <i>bēng bú zhù le</i>, “can’t hold it in”. A pun on the city name 蚌埠 (Bengbu).</li>
  <li><b>nsdd</b> = 你说得对 <i>nǐ shuō de duì</i>, “you’re right”, often sarcastic.</li>
</ul>
<p>Chinese internet language leans heavily on <b>pinyin initials</b>, <b>homophone puns</b> (谐音), split or look-alike characters, emoji and numbers (<i>520</i> = I love you, <i>886</i> = bye-bye). Machine translation handles almost none of them.</p>
<p>The same techniques are used to <b>get round keyword filters</b>, on commercial topics (brands, scams, gambling) and political ones. If you search only the standard term, you miss most of the discussion. Build keyword lists that include the variants, and check slang dictionaries such as Baidu Baike entries or 小鸡词典 (jikipedia). Slang changes fast, so date your sources.</p>`,
});
