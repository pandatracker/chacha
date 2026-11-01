defineChallenge({
  id: "coname",
  zh: "企",
  title: "Anatomy of a Name",
  level: "Medium",
  tags: ["companies", "language", "registrations"],
  brief:
    "Every mainland company name is built from the same few parts. Read them correctly and you know where the company is registered, what it does, who it belongs to and what legal form it has, before you open a registry. Take apart the two names on these gates.",
  artifact: `
<figure class="art">
  <a href="{{dir}}/ringpu-sign.jpg" target="_blank" rel="noopener"><img class="wide" src="{{dir}}/ringpu-sign.jpg" width="1280" height="960"
    alt="Grey stone sign in front of a factory: large English text 'ringpu pharma.' with the Chinese name 天津瑞普生物技术股份有限公司 below"></a>
  <figcaption><b>Gate 1.</b> Photo: wsklutz, Wikimedia Commons, CC BY-SA 3.0.</figcaption>
</figure>
<figure class="art">
  <a href="{{dir}}/crrc-gate.jpg" target="_blank" rel="noopener"><img class="wide" src="{{dir}}/crrc-gate.jpg" width="1280" height="602"
    alt="Stone gatehouse with a red logo and the name 中车齐齐哈尔车辆有限公司, English CRRC QIQIHAR ROLLING STOCK CO., LTD."></a>
  <figcaption><b>Gate 2.</b> Photo (cropped): Amarespeco, Wikimedia Commons, CC BY-SA 4.0.</figcaption>
</figure>`,
  questions: [
    {
      q: "Gate 1: what is the trade name (字号)?",
      fmt: "Chinese characters",
      h: ["603601270931040b453ac40d58b73af609541541849143c7f14ee65b20ba755f"],
    },
    {
      q: "Gate 1: which part describes the line of business (行业)?",
      fmt: "Chinese characters or English",
      h: ["0558a65451042dc244fbb1d8c53c97dc61ec5097121d1d4c6c9fd5f82036d37b","074d97a8c84cb2914b7a8faa2aee240047ee2c3e2296bf59b7bcb1db93f6e929","277e31184d4162a9378dc1a77cdd9b8ed2f5fb321f203809884d7bfc774b6958","384edd4c8f6c599442a4442ea8fef5afa8dc1e33968d0a905f291797bd6ad6cb","ebaecd7bdae93e476907530e90ab9e3b7b25312b990b5366f6d30db9b20dded8"],
    },
    {
      q: "Gate 1: what legal form does the company have?",
      fmt: "English or Chinese",
      h: ["2b43935861ab20c3da40c23ce6a8ccb3114bce257326e7b0b9827ebde495d7d8","5237e7bc52188b068fe2a1eda56b1f1d00ed076b1b3ef79d49b596bdae239fa1","54d9bf8f86e5ff848bf34a191bdbf99eba8098f30e5fa9ca44a3068444880ac6","62e03d5ce17391395fad715923e0b99298bc8ebb73621e800a2735ab7aa43f9f","873c0954a74e5d2ec91d75bd6203ab30d5bb7b444cdff14e35ed275b55f3d9cb","b53b72fad5cdd97a5ab05ea8667825bdf5a9e76d42555acad1ba73f589a1bbf4","b5f2e8ac83f777e74ae22075667c21dd82ff280229c86b8a13792a1f259f51f6","c97cbb2f2be5b89b039e492244f21d9ec7610eaa888ab210dc35241425f89b77","e3dbc5bc0a50110e445800fbecdafee3301d01de3f54b0739a2db6444059a295"],
    },
    {
      q: "Gate 2 doesn’t start with a place. Which part names the parent group?",
      fmt: "Chinese characters or English",
      h: ["2ecf2c7951586705755634bafc7421c7f91fdbfcc35519daf91f2ab232134f1f","88b42fe7cc6254e56e7241b8477bfbb9f397690a75d86b3c17eecacc63c57f36","919e22208ff66c81849c741c4d3411520a056177d0e46a0ca20eb9356e328ddb","a621710b665f452a97cea6f73ab2daf35d25f7d4899555e31844a54af3b86ad1","ca0e35c436b47d441c4ed1a985686d80e3ee1339272da646230b9a56266ff828"],
    },
  ],
  hints: [
    "The standard order is: place (行政区划) + trade name (字号) + line of business (行业) + legal form (组织形式). 天津 is the place. The English “ringpu pharma.” on the sign is a brand, not a translation of the legal name.",
    "有限公司 = limited liability company; 股份有限公司 is a different, larger form whose capital is divided into shares. In subsidiaries of big groups the group’s short name often comes first and the place moves inside the name.",
  ],
  learn: `
<p>Mainland company names follow the <b>企业名称登记管理规定</b> (company name registration rules):</p>
<p class="mono" style="text-indent:0">天津 + 瑞普 + 生物技术 + 股份有限公司<br>place · trade name (字号) · line of business · legal form</p>
<ul>
  <li><b>Place</b> (行政区划): usually first. It can also follow the trade name in brackets — 格力电器<b>（临沂）</b>有限公司 is Gree’s company in Linyi. A few large firms registered without one (华为技术有限公司).</li>
  <li><b>Trade name</b> (字号): the distinctive part, and the best search term — but one trade name can be registered in many places (see <i>False Positive</i>).</li>
  <li><b>Line of business</b> (行业): 生物技术, 科技, 贸易, 投资, 车辆…</li>
  <li><b>Legal form</b> (组织形式): <b>有限公司</b> (limited liability), <b>股份有限公司</b> (joint-stock company — the only form that can list shares on an exchange), 集团有限公司 (group parent), 有限合伙 (limited partnership). <b>分公司</b> = a branch with no legal personality of its own; it hangs off the parent’s credit code.</li>
</ul>
<p>In <b>中车齐齐哈尔车辆有限公司</b> the group’s short name <b>中车</b> (CRRC) comes first, then the place (齐齐哈尔), the business (车辆, rolling stock) and the form. Group-prefix names like this point you to the parent: search the parent’s subsidiaries (对外投资) to map the group.</p>
<p class="caveat">English names are not registered. “ringpu pharma.” on Gate 1 is a brand. English versions of the legal name vary from document to document, so always search and match on the Chinese name and the credit code.</p>
<p class="hint">Photo sources: <a href="https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E6%B4%A5%E7%91%9E%E6%99%AE%E7%94%9F%E7%89%A9%E6%8A%80%E6%9C%AF%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%97%A8_-_panoramio.jpg" target="_blank" rel="noopener">Gate 1</a> (wsklutz, CC BY-SA 3.0), <a href="https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E8%BD%A6%E9%BD%90%E9%BD%90%E5%93%88%E5%B0%94%E8%BD%A6%E8%BE%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%97%A82017%E5%A4%8F.jpg" target="_blank" rel="noopener">Gate 2</a> (Amarespeco, CC BY-SA 4.0), Wikimedia Commons.</p>`,
});
