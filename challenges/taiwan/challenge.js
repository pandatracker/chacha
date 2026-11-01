defineChallenge({
  id: "taiwan",
  zh: "台",
  title: "Same Language, Different Words",
  level: "Easy",
  tags: ["Taiwan", "language", "search"],
  brief:
    "You are searching for the same story in Taiwanese and mainland sources. Converting traditional characters to simplified isn’t enough: Taiwan and the mainland often use different words for the same thing, and a few words mean something else entirely. Give the mainland equivalent of each Taiwan term.",
  artifact: `
<figure class="art">
  <a href="{{dir}}/shilin-sign.jpg" target="_blank" rel="noopener"><img class="wide" src="{{dir}}/shilin-sign.jpg" width="1280" height="960"
    alt="Blue parking sign with a large P reading 捷運士林站橋下空間機車停車場; a yellow taxi and people on scooters on the street behind"></a>
  <figcaption>Street sign in Taipei (click to enlarge). Photo: Tianmu peter, Wikimedia Commons, CC BY 3.0.</figcaption>
</figure>`,
  questions: [
    {
      q: "捷運 on the sign — what would a mainland sign say?",
      fmt: "Simplified Chinese",
      h: ["692eaa4f5d4352eb845ae738d738eca10d8f84315c1c2cb17308958d2688c830","b4b9ed47545706ec06a80e921e9725c0013301606b8df247ceff7f340e2a8c8f","cfda185d1828c6bba0d2c243af15a07d84d96c848ff0d7028fd557241269e970","e53347a683dab5388841f74a15bdecc0b814a602382ada6cb52599da17f4b454","facd33240678179bee0c50400c070bbc54b4f32ca688e7ebfa3eadffe310c577","fed6c8e53aca0f55deef7a2bb2c8ed7ab06274bfbf822a2cccb55b3d1b17c4ef"],
    },
    {
      q: "機車 on the sign (look at the street) — mainland word?",
      fmt: "Simplified Chinese",
      h: ["09166a29dd5aa21515c33526fdd76a81331ff84a699f2253e28243b95b6ce00c","814fd37d8acaf0994959ee84e814f6d1274d68dbec1e40f9571bd960cbfb94d4","8fc23262d9f4a278616401de286c2a6ace0eeabccb697f1e2bac4277d393cc56","92a89ade6c9cac861938e6dc3af10d44dc1469693c89d21fe05853602be4384c","a8d999970bed8fdb5033db0123b8e8ffb1c3b85ee87383383b38a884c3abf756","b1b8bb841c2aa1c1968e45ebcaaf903d921a67a21566d668c96c02015bc98630","b56472665df1d0df8b4ddd575e5d020723919e2d4fa22042a8a3968fd0b0d6b3","c2b1520936d24181268f54cd3e524edbf97cc792cf5ab3d555632a1ccc21168f","ebcf28750210ebda5eeba888fee0a9efd9db2f596951405159ddf8092eea0016","f12bf2645ef1e5dc03fd5085f1b536791a410ddd53de93ec1c91797816f827ee","ff39bbd84fa7c61012abaa740678385bca32162a585af094e11bf3ffa2e7d84c"],
    },
    {
      q: "The yellow car is a 計程車 in Taiwan. Mainland word?",
      fmt: "Simplified Chinese",
      h: ["152a1cdb5c1ad671804f207703d15bfa84df50c09bf898c213fb607c5d8812b5","1c9eb54d8377cebd309af3fcb6507484d0d1961cfa6d57b168c40764b4f74c50","21710f4c9f226e7f74a7ead367280ad37a7b3db9758aeaa4737c57f01a2858ff","42eaf96de4cec3f77cacb393f06541f0bdc9201a8b1a880495e4ba2ffa66f891","95639d3ead8e948f05fa37da1ef9b2703c76e0299f8f39f43a531278d7060237"],
    },
    {
      q: "Trap word: a Taiwanese menu lists 土豆. What is it?",
      fmt: "English or Chinese",
      h: ["25790252ee7fcca365076e766dd8b6730ba019aedbfa409e341e81172e363328","40288f51044844545b61d5a048e12125849f2cf6c53959193db19065e9d97ee2","448aeef10074c7ebbd758f7f9cb2a9c9af52ed838d3331aad583b1e68e9f50da","8c9bedbb754bd79797d3e2a999ae2f3242fc0c2d7ecd91ea8079d7590db924af","eec110bce07bf0cfe0a44f9443074f37847571291a2a13484393c205c2bfe67f"],
    },
    {
      q: "A Taiwanese user uploads a 影片. Which word would you search on mainland platforms?",
      fmt: "Simplified Chinese",
      h: ["3233adca656ae685bea7c50e49a8cce26c6c0f048e7339246cf1a652f00be936","6b0d725addc974f86593a09880b36638a694521644cf6bd472cf29bdd7436d1d"],
    },
  ],
  hints: [
    "捷運 is short for 大眾捷運 (mass rapid transit). On the mainland the everyday word is the one used for the Beijing or Shanghai metro. 機車 in Taiwan is the two-wheeler everyone rides; on the mainland 机车 means a railway locomotive.",
    "On the mainland 土豆 is a potato, but not in Taiwan, where a potato is 馬鈴薯. Think of a small legume. For video, mainland platforms such as Bilibili and Douyin use a two-character word starting with 视.",
  ],
  learn: `
<p>Taiwan and the mainland share a written language but split vocabulary after 1949. Converting characters (繁→简) does not convert words, so a search for the mainland term misses Taiwanese sources and the other way round.</p>
<table class="form" style="min-width:0">
  <tr><th>Taiwan</th><th>Mainland</th><th>Meaning</th></tr>
  <tr><td>捷運</td><td>地铁</td><td>metro</td></tr>
  <tr><td>機車</td><td>摩托车 / 电动车</td><td>scooter, motorbike (mainland 机车 = locomotive)</td></tr>
  <tr><td>計程車</td><td>出租车</td><td>taxi</td></tr>
  <tr><td>土豆 / 馬鈴薯</td><td>花生 / 土豆</td><td>peanut / potato</td></tr>
  <tr><td>影片</td><td>视频</td><td>video</td></tr>
  <tr><td>網路 · 軟體 · 資訊</td><td>网络 · 软件 · 信息</td><td>internet · software · information</td></tr>
  <tr><td>簡訊 · 部落格 · 隨身碟</td><td>短信 · 博客 · U盘</td><td>text message · blog · USB stick</td></tr>
  <tr><td>鳳梨 · 腳踏車 · 公車</td><td>菠萝 · 自行车 · 公交车</td><td>pineapple · bicycle · bus</td></tr>
</table>
<p>Other tells for Taiwanese text: <b>Zhuyin</b> (ㄅㄆㄇㄈ) instead of pinyin, <b>台/臺</b> forms, Minguo dates (see <i>Republic Time</i>), and Wade–Giles-style romanisation. Converters with regional profiles (OpenCC <span class="mono">s2twp</span> / <span class="mono">tw2sp</span>) translate common vocabulary too, but check the results by searching them.</p>
<p class="hint">Photo source: <a href="https://commons.wikimedia.org/wiki/File:%E6%8D%B7%E9%81%8B%E5%A3%AB%E6%9E%97%E7%AB%99%E6%A9%8B%E4%B8%8B%E7%A9%BA%E9%96%93%E6%A9%9F%E8%BB%8A%E5%81%9C%E8%BB%8A%E5%A0%B4%E6%A8%99%E8%AA%8C_20080303.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (Tianmu peter, CC BY 3.0).</p>`,
});
