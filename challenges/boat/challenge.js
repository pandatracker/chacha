defineChallenge({
  id: "boat",
  zh: "渔",
  title: "Hull Number",
  level: "Medium",
  tags: ["maritime", "vessels", "registrations"],
  brief:
    "A vessel photographed off South-East Asia is suspected of taking fish from fishing boats at sea (transshipment). There is no AIS signal. All you have is what is painted on the hull.",
  artifact: `
<figure class="art">
  <a href="{{dir}}/fishing-carrier.jpg" target="_blank" rel="noopener"><img class="wide" src="{{dir}}/fishing-carrier.jpg" width="1280" height="678"
    alt="A rusty white Chinese vessel underway with a large A-frame gantry; on the bow a black board reads 鲁荣远渔运168 LU RONG YUAN YU YUN; amidships BBZS4 is painted in large letters"></a>
  <figcaption>Click to enlarge. Photo: kitmasterbloke, Wikimedia Commons, CC BY 2.0.</figcaption>
</figure>`,
  questions: [
    {
      q: "In which province is the vessel registered?",
      fmt: "Province name",
      h: ["00005b131ec21b4a9014a856e8d50232d581fa6f65bd9bb028f9370e900131fe","0ef68496431d506d8d9250ab157b36d319d3d01bfacb64293f9fe5269319c114","2faa9b5f9ec4102935ebb91153da4068bc8ca75b8c317d541308704603ac68cb","718750af6d7bf4238e4eaf33da9422120c87a2953d0d0e42b2d64e60656aa0bb","f738cd35463fff58e8e107fc4a1d1dccca63fac6350bd2aee1b9abb12da85d19"],
    },
    {
      q: "Which county-level city is its home port?",
      fmt: "City name",
      h: ["27b9c4642c5a27e5d091d55b1cf98fceea38d95d107fb8a533dda9f8461a15f4","95ad5fd497ecd99cd0dabdf8b5a36d4e8e318c5da4c40ee274dba36023d4bd6c","a0e1594d87e8645afd6b1b427a6c13e5126638b77d79d0cf6b74852f0ff11800","b1b0e7dec9a21a4963686d23875d812b3eb1fce7c02d6bdb01c51ba84f1f9329","e59dec64093973e508fcd648f9cf2133bfd9cd565a1dcba4fe71f59948677733"],
    },
    {
      q: "What kind of identifier is “BBZS4”?",
      fmt: "Type of identifier",
      h: ["2ec9316e982518049183a18689da20703fd67731e1cb260e45f04daffdc04864","3a298e7a19f574b7d2fe23b2564d5d123316341fcae75312161e07fee2c5fc9b","4857c64935e8fef1f0c9b99a58a03691f22c0de581365abcfe3b9f33b88cac87","5b4d1c396f3c830619f836ff6292ecb7d3897581c55cb23493d3d1ae983f63ee","886249d6c2d0f1de441752ac14231f1b8b2d3fc6a3d9f9928805b718ad3eff72","f0a13071c11e213d2908d3004904761af29d8847adb9f398913baf87d92fb8ed","f16200023beb88a9fafd5fdd3043e59bb767bce2ed932c114b941ea1f86d52c8"],
    },
  ],
  hints: [
    "Chinese fishing-vessel names follow a pattern: [province abbreviation][county abbreviation][vessel type][number]. The first character is the same abbreviation used on number plates.",
    "荣 is short for a county-level city at the tip of the Shandong peninsula, famous for its distant-water fleets. The Latin letters starting with B are a radio identifier used in maritime communications.",
  ],
  learn: `
<p>Chinese fishing vessels carry names that encode their registration: <b>鲁 荣 远渔运 168</b> =</p>
<ul>
  <li><b>鲁</b> — Shandong (province abbreviation, as on plates)</li>
  <li><b>荣</b> — Rongcheng 荣成 (Weihai), the home port county</li>
  <li><b>远渔运</b> — distant-water (远洋) fishery (渔) carrier (运): a refrigerated vessel that collects catch from fishing boats at sea. Plain <b>渔</b> = fishing vessel; <b>远渔</b> = distant-water fishing vessel.</li>
  <li><b>168</b> — serial number</li>
</ul>
<p>Other common prefixes: 浙岱渔 (Daishan, Zhejiang), 浙普渔 (Putuo, Zhoushan), 闽狮渔 (Shishi, Fujian), 闽晋渔 (Jinjiang, Fujian). <b>BBZS4</b> is the vessel’s radio <b>call sign</b>; Chinese call signs start with B. With a name or call sign you can search AIS platforms (MarineTraffic, Global Fishing Watch), IMO and port-state records, and regional fishery body vessel lists for the MMSI (Chinese MMSIs begin 412–414), owner and track history.</p>
<p class="caveat">Carriers like this are central to investigations into illegal, unreported and unregulated (IUU) fishing and forced labour at sea, because transshipment hides where fish were caught. Names are sometimes repainted or reused, so cross-check every identifier you can see.</p>
<p class="hint">Photo source: <a href="https://commons.wikimedia.org/wiki/File:MV_Lu_Rong_Yuan_Yu_Yun.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (kitmasterbloke, CC BY 2.0). The vessel is real; no wrongdoing is implied — the brief is fictional.</p>`,
});
