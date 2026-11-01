defineChallenge({
  id: "footer",
  zh: "备",
  title: "Footer Notes",
  level: "Easy",
  tags: ["websites", "registrations"],
  brief:
    "You are looking into a small tech company with an anonymous-looking website. Every site hosted in mainland China has to show its registration numbers — scroll to the bottom.",
  artifact: `
<figure class="art">
  <div class="browser">
    <div class="br-bar"><i></i><i></i><i></i><span>https://www.████████.cn/</span></div>
    <div class="site-foot" lang="zh-CN">
      <nav>关于我们 ｜ 产品服务 ｜ 加入我们 ｜ 联系我们 ｜ 隐私政策</nav>
      <p>Copyright © 2019–2025 青禾网络科技有限公司 版权所有</p>
      <p><span class="ul">浙ICP备2023041177号-1</span>　　<span class="badge" aria-hidden="true"></span><span class="ul">浙公网安备 33010602011873号</span></p>
    </div>
  </div>
  <figcaption>Footer of the company’s homepage.</figcaption>
</figure>`,
  questions: [
    {
      q: "Which province’s communications administration approved the website’s ICP filing?",
      fmt: "Province name",
      h: ["3b9c3388fd13c2266e9e723a06137c2c44f354f0afad477c53e291548ead1687","b356ce36c35db1334bdc5e730bf51df10c68690459dd510abe9f27aef04a1cd0","fbb4e5ed6603a3bf52bac9902b120f48d2d15bf52490a6373a89e46bfa629e18"],
    },
    {
      q: "The second number is a police (公安) filing. In which district was it filed?",
      fmt: "District name, e.g. Chaoyang",
      h: ["0c3319b0eb618db0ba29326d5cd791eda9d198b731ef9e62da6daa53ca8ba5f3","20f852591d505c2b2f177f871b8f792a7a6ca0bb04a8cce1e535701d8bad37d1","532ecdf6589cf24c8ddaf13fd00999cb142f54d1fd894f17e01aa0b41971a757","6993e63da6d525b0cf91a7eaac9d727f6e90edd4aa25722e19e7cc992e1a381c","7444fead58070f1b4a09ecbe2d4a499d7eaf14bde664cc8d47dca9ea0dd76286","7603af416312f67704a8bbbb47caf29b4d1f1304e791807a1ddcf5268d9c68ca","bb0723407a3b8f6c51cd78f3f14886d7b501be7c104c1588e9987024d289b8cd","d9a109ef0780a1b57f58bd68b6e4f34a7d38fb298356f39617fd15ab46e25331","dd809636e8a1495f10b80ece15d83101575fb3674353d408687cecdf358eaff5"],
    },
  ],
  hints: [
    "ICP filings (ICP备案) are handled per province; the number starts with that province’s one-character abbreviation — the same one used on licence plates.",
    "The police filing number (公网安备) starts with a six-digit administrative division code (行政区划代码). Look it up.",
  ],
  learn: `
<p><b>ICP filing (ICP备案).</b> Format: <i>[province]ICP备[year][serial]号-[site]</i>. The prefix is the province where the filing was made — normally where the company is registered. A <i>…ICP证…</i> number instead is a commercial ICP <i>licence</i>. You can search any number or domain on the MIIT’s official lookup at <span class="mono">beian.miit.gov.cn</span>, which returns the registered entity name.</p>
<p><b>Police filing (公网安备).</b> Format: <i>[province]公网安备 [6-digit division code][serial]号</i>. The first six digits are the GB/T 2260 administrative division code of the local public security bureau: 33 = Zhejiang, 3301 = Hangzhou, 330106 = a specific district. That is often more precise than anything else on the site. Lookup: <span class="mono">beian.mps.gov.cn</span>.</p>
<p>The same six-digit codes come back in ID numbers and company credit codes — learn to recognise them.</p>`,
});
