defineChallenge({
  id: "ports",
  zh: "埠",
  title: "Treaty Port Names",
  level: "Easy",
  tags: ["archives", "romanisation", "place names"],
  brief:
    "You are tracing a trading firm’s history through an archive. Its letters mention offices at Amoy, Swatow and Chefoo — none of which appear on a modern map. The same file contains this US government map from 1899, with the treaty ports marked in yellow.",
  artifact: `
<figure class="art">
  <a href="{{dir}}/ports-map-1899.jpg" target="_blank" rel="noopener"><img class="wide" src="{{dir}}/ports-map-1899.jpg" width="1200" height="1381"
    alt="Detail of an 1899 commercial map of China's coast from Manchuria to Hong Kong; treaty ports in yellow boxes include Tientsin, Chefoo, Shanghai, Ning-po, Foochow, Amoy, Swatow and Canton"></a>
  <figcaption>Click to open full size. Detail of the <i>Commercial Map of China</i> (U.S. Bureau of Statistics, Treasury Department, 1899). Public domain, via Wikimedia Commons.</figcaption>
</figure>`,
  questions: [
    {
      q: "What is Amoy called today (Hanyu Pinyin)?",
      fmt: "City name",
      h: ["7084065170d88d5b9311ec08681522326fc8e8cde9bba7a80e2bce87deb1833e","d6328ad22120af5143b28c818555a1440657e23780b3ac243de4607f18476fd2","f3ab70968a98e5cc2038f89edb9ca367103c9ae8c0b6bc24ef5bdafede671343"],
    },
    {
      q: "What is Swatow called today?",
      fmt: "City name",
      h: ["061118953cabe5da99b6c87b82e5d4e9f6233fc9f6dd50fb2e4d129bda1042d7","3c1d88d0dbface1f70a524135c1df7b60587bb454dda7ed1aa9a768df6ce17ce","b4e0042cf763263767099443b34c0375f05ca8714132cca17496181c3c0b00c5"],
    },
    {
      q: "What is Chefoo called today?",
      fmt: "City name",
      h: ["104ec9cf4411d1840d1c8f852ffc236d2462fa20d9506509c12f7c9c312e3767","90d63f25eef81df4f6b1e93b5e2bcb144cf068d175805c2c334a28e9da01f406","b1a93e183473971f5ea0072ea8e3a32ced3490beedccb2ba7e0b73e7643f6f19"],
    },
  ],
  hints: [
    "Before Hanyu Pinyin (created 1958) became the international standard around 1979–1982, the West used Chinese Postal Map Romanisation and Wade–Giles — often based on local dialects, not Mandarin.",
    "Find each port on the map and compare its position with a modern map of the coast: Amoy sits on an island opposite Formosa (Taiwan), Swatow further south-west near the Guangdong border, Chefoo on the north shore of the Shandong peninsula. Amoy and Swatow come from southern dialects (Hokkien, Teochew).",
  ],
  learn: `
<p>Western archives, older maps, shipping records, missionary papers and many company names still use pre-pinyin spellings, often from <b>Chinese Postal Map Romanisation</b> (1906):</p>
<ul>
  <li>Amoy → 厦门 <b>Xiamen</b> (from the Hokkien pronunciation)</li>
  <li>Swatow → 汕头 <b>Shantou</b> (Teochew)</li>
  <li>Chefoo → 烟台 <b>Yantai</b> (from 芝罘 Zhifu, a peninsula there)</li>
  <li>Foochow → 福州 Fuzhou; Tientsin → 天津 Tianjin; Tsingtao → 青岛 Qingdao; Canton → 广州 Guangzhou; Peking → 北京 Beijing; Nanking → 南京 Nanjing</li>
</ul>
<p>Old spellings survive in brands (Tsingtao Beer, Amoy sauces, Peking University) and in Taiwan and diaspora names. When a historic place doesn’t match, check <b>both directions</b>: old → characters → pinyin. Watch out: some old names point to different places than you’d guess (Canton was also used for the whole province).</p>
<p>Old maps are a good way in. Georeference them — e.g. overlay them in QGIS, or use the David Rumsey Map Collection’s georeferenced maps — and the old name lands on the modern city. The map here also shows the foreign-held ports of 1899: Kiao-chau (German, today Qingdao’s Jiaozhou Bay), Wei-hai-wai (British, Weihai), Port Arthur (Russian, Lüshun) and Kwang-chau-wan (French, Zhanjiang).</p>
<p class="hint">Map source: <a href="https://commons.wikimedia.org/wiki/File:1899_United_States_Government_Commercial_map_of_China,_showing_treaty_ports,_ports_of_foreign_control,_railways,_telegraphs,_waterways.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (public domain; original at the Boston Public Library via Digital Commonwealth).</p>`,
});
