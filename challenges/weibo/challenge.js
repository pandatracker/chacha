defineChallenge({
  id: "weibo",
  zh: "博",
  title: "Panda on the Wall",
  level: "Medium",
  tags: ["social media", "geolocation"],
  brief:
    "Your subject posts on Weibo under a nickname and never names places. Since 2022 Chinese platforms show an IP location label on every post. Combine it with the photo.",
  artifact: `
<figure class="art">
  <div class="weibo" lang="zh-CN">
    <div class="wb-head">
      <span class="wb-av" aria-hidden="true">M</span>
      <div><b>momo_在路上</b><br><small>10-12 18:42 · 来自 iPhone客户端 · IP属地：四川</small></div>
    </div>
    <p>下班路过，那只熊猫还挂在楼上 🐼 每次看到都想笑 <span class="wb-ht">#周末去哪儿#</span></p>
    <img class="wb-pic" src="{{dir}}/weibo-panda.jpg" width="960" height="1295"
      alt="Looking up at a mall facade: a giant faceted black-and-white panda sculpture clings to the wall, with a glass tower and cloudy sky behind">
    <div class="wb-act"><span>转发 12</span><span>评论 38</span><span>赞 406</span></div>
  </div>
  <figcaption>Weibo post (re-drawn; account fictional). Photo: David Xuang, Wikimedia Commons, CC BY-SA 4.0.</figcaption>
</figure>`,
  questions: [
    {
      q: "In which city was the photo taken?",
      fmt: "City name",
      h: ["2f3ac80b5e4b42b0a1ed8fcac57c0eead22dd7b791aff95bd4381c96ba598602","527a9f82b10bc633dd4f2c8f97d7dbcaa79768b2439f3a729ab72b0de12ba548","7b9979fef7e9f01f1496c203643e9897cdc6d7321a38438b5d117f37abf7078f","e8bbd681b05c5d6b14d9fa6610df025e28978c874e4476ca58b3bc5fe53cfbef"],
    },
    {
      q: "What is the name of the building or complex with the panda?",
      fmt: "Name in English or Chinese",
      h: ["0b63cce07fbfae2562564ddb1983e75fefb9f2a4e0e5d39a38d4a67e52767c41","1c7f3c75450ab6687e78c40ae3084613ab2f281e4738922d65cf6be8b905e36d","43e911f1f4fe32aab19158ea5afc18cc4c1d4adf8a8169aaa1a897913f693b90","769e937fe3ae4ba25e42fd6ddde4915504a3885a98e04f9ee3107f5b9ed994e3","7deb161f9825152882a382072ac079e2980314bd903ee283292bddfad07735df","aeea7268aca9b1f38ad71089292d4083908dee72b8023afd6290a7ec19c42803","cdbc710f79f4ea4dfd4b414ec4b50aecaac67b27b54b3a14bf01809505c7131a","dac4889016a6551a2ef835fbab1af8207ac1a44398d9e0d2ffb77d3f3fbc6f11"],
    },
  ],
  hints: [
    "For users inside mainland China, “IP属地” shows the province only. It narrows things down, but you still need the photo.",
    "Search the landmark in Chinese: something like 熊猫 爬楼 商场 (“panda climbing building mall”), plus the province.",
  ],
  learn: `
<p><b>IP location labels (IP属地).</b> Since 2022 Weibo, Douyin, Xiaohongshu, Zhihu, Bilibili and others show where a post was made from: the <b>province</b> for mainland users, the <b>country/region</b> for overseas users. It comes from the IP address at posting time, so VPNs and roaming can skew it — treat it as a clue that narrows the search, not as proof.</p>
<p><b>Landmark searching.</b> Describe what you see, in Chinese, on Chinese platforms (Baidu, Xiaohongshu, Dianping). Big public artworks are popular check-in spots (网红打卡点) and are photographed thousands of times. The giant panda <i>“I am here”</i> climbing the side of a mall is one of the best-known in China.</p>
<p>Check the result in street-level imagery — Baidu Maps 全景 or Amap — rather than relying on Google, whose coverage in mainland China is thin.</p>
<p class="hint">Photo source: <a href="https://commons.wikimedia.org/wiki/File:The_panda_at_IFS_Chengdu_from_Hongxing_Road.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (David Xuang, CC BY-SA 4.0). Sculpture <i>I Am Here</i> by Lawrence Argent.</p>`,
});
