defineChallenge({
  id: "ticket",
  zh: "票",
  title: "Birthday Trip",
  level: "Medium",
  tags: ["identity documents", "transport", "social media"],
  brief:
    "Your subject posted a photo of a high-speed rail ticket on social media. Railway tickets are real-name, so the ticket carries a partly masked ID number. The post gives away the rest.",
  artifact: `
<figure class="art">
  <div class="weibo" lang="zh-CN">
    <div class="wb-head">
      <span class="wb-av" aria-hidden="true">T</span>
      <div><b>甜甜圈不甜</b><br><small>03-14 07:58 · 来自 HUAWEI Mate 60 · IP属地：广东</small></div>
    </div>
    <p>今天生日 🎂 送自己一张去长沙的票，臭豆腐我来了！</p>
    <div class="tix" lang="zh-CN">
      <div class="tix-r1"><span class="tix-no">Z14C028716</span><span>深圳北站售</span></div>
      <div class="tix-r2">
        <div><b>深圳北站</b><small>Shenzhenbei</small></div>
        <div class="tix-train"><b>G1014</b><span>→</span></div>
        <div><b>长沙南站</b><small>Changshanan</small></div>
      </div>
      <div class="tix-r3"><span>2024年03月14日 09:12开</span><span>05车12F号</span></div>
      <div class="tix-r3"><span>二等座</span><span>限乘当日当次车</span></div>
      <div class="tix-id mono">4403041995****284X <span class="tix-blur">███</span></div>
      <div class="tix-foot">买票请到12306　发货请到95306</div>
    </div>
  </div>
  <figcaption>Social-media post with a train ticket photo (re-drawn).</figcaption>
</figure>`,
  questions: [
    {
      q: "What is the passenger’s full date of birth?",
      fmt: "YYYY-MM-DD",
      h: ["8d558aa2d941f49f8d9310ec1dffb064e5a2cacc9956f4a7841c087eaee7dca9"],
    },
    {
      q: "In which district was the passenger’s ID number issued?",
      fmt: "District name",
      h: ["0412fa305878f4f1eb891017e12f9d90d894a432c472205a6d808be60da7bd7b","0a1f4e39b8482afba417990d3f8356e39dd25ef0b26da025dacc4ef1d6b99fc0","274134ca87e20fb3036d88f5759aa091962426e5bc2b310275b9c2b1b2491a74","9eaad626f8e813f3f84b197b53045ada2f8f9244c91cd3567581feaa75f5b993","a74383d631ccd4fef0e81c3cd693c082a942cb76125cc27c91a39d4e2c8f0582","aeb6f608eea4536228d1094477e07687775d103742e6caa70a2b9ab52e83ba3c","ba82a19907782a1f1c59212a3ba0544c4973463017189e079c4a88f649e3f74b"],
    },
    {
      q: "What sex is recorded in the ID number?",
      fmt: "male / female",
      h: ["21e1147f05938d5b59de8a982759ef4405aaca5dc7b88f23927d49549d3debc8","31c6ad7cd28ce0a58514148a1c194122e2ed0fcf36829cf29d53f810c07c16c0","71eb119ac365c08ac9eaa960a3e5f6bf02d7c87bbdd7f0c0a77ffbad2aa395a7","94bcdee9d767de614fc9083c83b43778b39a9ab02ec25c0896fdaa13ffb030ef","c726d42e05151fa1b6cea5aff4ff2bfa1fbb87e4620f7bbb4f790b57435098b8"],
    },
  ],
  hints: [
    "Remember the ID-number structure from “Eighteen Digits”. Which digits does the railway mask?",
    "The masked digits are the month and day of birth. The post is dated, and the caption says something about that day.",
  ],
  learn: `
<p>China’s railways use real-name ticketing, and tickets print the passenger’s ID number with <b>digits 11–14 masked</b> — exactly the month and day of birth. On its own, the ticket still gives the <b>place of registration</b> (digits 1–6), <b>birth year</b> (7–10) and <b>sex</b> (17th digit: odd = male, even = female). Here 440304 is Futian, Shenzhen, and the 17th digit 4 is even.</p>
<p>The masked part is often easy to fill in from <b>context</b>: birthday posts, celebration photos, “happy birthday” comments from friends. Masking schemes also differ by platform (some hide the year, some the area), so <b>two partly masked copies can rebuild the whole number</b> — always collect every copy you find.</p>
<p>The train number also says something: <b>G</b> high-speed, <b>D</b> EMU, <b>C</b> intercity, <b>Z/T/K</b> conventional express trains.</p>`,
});
