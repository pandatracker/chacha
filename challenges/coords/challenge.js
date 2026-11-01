defineChallenge({
  id: "coords",
  zh: "坐",
  title: "Off by a Kilometre",
  level: "Hard",
  tags: ["geolocation", "maps", "coordinates"],
  brief:
    "Your subject sent a contact their location from a map app. You paste the coordinates onto satellite imagery and find… nothing interesting. Chinese map coordinates are not what they seem.",
  artifact: `
<figure class="art">
  <div class="chat" lang="zh-CN">
    <div class="chat-h">老周</div>
    <div class="chat-msg"><span class="chat-av" aria-hidden="true">周</span><div class="bubble">我到了，就在这儿等你，门口人特别多</div></div>
    <div class="chat-msg"><span class="chat-av" aria-hidden="true">周</span>
      <div class="loc">
        <div class="loc-map" aria-hidden="true"><span>📍</span></div>
        <div class="loc-t"><b>我的位置</b><br><span class="mono">39.999425, 116.403212</span><br><small>百度地图 · 位置分享</small></div>
      </div>
    </div>
  </div>
  <figcaption>Chat screenshot (re-drawn).</figcaption>
</figure>`,
  questions: [
    {
      q: "Which coordinate system are these coordinates in?",
      fmt: "System name, e.g. WGS-84",
      h: ["2f02137a58a32728fe2f7de6e51b8fe3d0d8a2108b1a9dfc556395c0fc01d5f8","336038ff381c58fa3b8556fce2ecbf702ae8204a988a0b2608c1b9d2abbf26f2","5e8dc7011fde7497d2ae4bb993efcba03e0f74594c12697952e08cea6a05bf1a","9416f1da82fed997effea0fb205f0bf141a2f7f8fca45dbc3bcca8cf2c0b223b","c8efe7f9f1e32a71aacfdd345f724a49258651f13d504a66066f7f197b1c466c","d62c65539918efe56c3ecc1076811441ed97277e0b8e4b9c092c8630c4de5e3d","ee01e6836dfbfc7e5c9f602fc57901b93d83692d31e4ddf37d69b94a24bdd6eb","f4bde88e4d29d11e2398a1aa3e982fbc4027af3e84008d74788bbadc5ac0d360"],
    },
    {
      q: "Which landmark is 老周 actually waiting at?",
      fmt: "Landmark name, English or Chinese",
      h: ["1836ffc2086d9e25413f74d1a0bbda6d75eb94ba6296fac39c065423db6fdd1c","295f1de9e84bb62687d5f1f816c0da485a936920c64bfa6d98e9040a78669ae1","3fcaf624fe1d0ae0626f6e57cfed2c768ed8314dfce7a67da0cdb6f8be73277d","6bd47da5125f034eea75c7c4c999669b62aa577c6112eb7fb01440c4d99d521a","8b82a4e39f5381b831c2f105399a6d94e5392ba87ee991c4dee1bcc996753fe3","98d759c1afb2d001a705e5a96612e8b5e9e94b3e590e4cb4e9d88ff0e3955fc0","a7975f776c2fc8caf624e731d1dc8fee961de84890b0507c1afc5312528001a4","a939f0053f03c90a0b9e113c23d9e662ccccc06a15ea77ecf3e3bdaaae94dfae","b098e1b06b2a7c7e1eb73e7444e375556d102982f93d3a16155e171ecae65a8a","d9f2594637ab68316ffa8a990a75613149a4b8c4a95829fd16ffa4bce95abf40"],
    },
  ],
  hints: [
    "By law, maps published in China must use an obfuscated datum instead of WGS-84 (GCJ-02, nicknamed 火星坐标 “Mars coordinates”). One big map provider adds a second, proprietary offset on top.",
    "Convert the coordinates to WGS-84 (search “BD-09 to WGS-84 converter”, or use a coordtransform library) and look again on satellite imagery.",
  ],
  learn: `
<p>Three coordinate systems are common in China:</p>
<ul>
  <li><b>WGS-84</b>: GPS. Used by Google Earth / satellite imagery, OpenStreetMap, photo EXIF data.</li>
  <li><b>GCJ-02</b> (“Mars coordinates”): the state-mandated obfuscated datum, a non-linear shift of usually a few hundred metres. Used by Amap (高德), Tencent Maps, Apple Maps in China and Google’s <i>road</i> map of mainland China — which is why Google’s roads and its satellite imagery don’t line up there.</li>
  <li><b>BD-09</b>: Baidu applies an extra offset on top of GCJ-02. Baidu’s APIs label it <span class="mono">bd09ll</span>.</li>
</ul>
<p>Here the BD-09 point lands about 1.4 km north-east of the real spot when read as WGS-84. Converted, it falls on the Beijing National Stadium (the “Bird’s Nest”) in the Olympic Green.</p>
<p><b>Rule of thumb</b>: always ask where a coordinate came from. Converting GCJ-02/BD-09 → WGS-84 is approximate (good to a few metres), and applying a conversion to coordinates that are already WGS-84 introduces the very error you’re trying to remove.</p>`,
});
