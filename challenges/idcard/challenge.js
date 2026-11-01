defineChallenge({
  id: "idcard",
  zh: "证",
  title: "Eighteen Digits",
  level: "Medium",
  tags: ["identity documents", "data breaches"],
  brief:
    "An excerpt of a gym-membership sign-up sheet turned up in a leaked dataset. The name is partly masked, but the ID number field was not. (The person and number are fictional; the checksum is valid.)",
  artifact: `
<figure class="art">
  <table class="form" lang="zh-CN">
    <caption>会员登记表 · Membership form</caption>
    <tr><th>姓名</th><td>王**</td><th>会员卡号</th><td>VIP-004417</td></tr>
    <tr><th>证件类型</th><td>居民身份证</td><th>联系电话</th><td>186****0937</td></tr>
    <tr><th>证件号码</th><td colspan="3" class="mono big">110108199207150261</td></tr>
    <tr><th>办卡日期</th><td>2023-03-02</td><th>门店</th><td>***店</td></tr>
  </table>
  <figcaption>Leaked sign-up record (excerpt).</figcaption>
</figure>`,
  questions: [
    {
      q: "What is the holder’s date of birth?",
      fmt: "YYYY-MM-DD",
      h: ["1a4bcf5864e51a45d87b1fee252ee3b62d5b0f5deddde16f11c720d067379303"],
    },
    {
      q: "In which district was the ID number originally issued?",
      fmt: "District name",
      h: ["02b30216a833cee2b61ff409f6964484c6f135bb01a5f59c7c7ef38b5c84ec0b","46cc0f81ba2102d939b19dce26cdb867fcbff091b0158313a86cbf772e364c64","496d63820f7a2cd2a7fdb2cb4ec0639b852c2ba91e770d5fb048efe2820884e5","532ecdf6589cf24c8ddaf13fd00999cb142f54d1fd894f17e01aa0b41971a757","6cb1ae2bd2647cd215f95fbea3613a2ba90ebc849b730555d323038a2d035947","b0eb87f636f57dc826c349394d934ec4da092ab83cebc336e92cba0e5157108b","e410aad98f2c20f4c2ed1a432bdf5e7ce191cf711ff8aebfadcb6065e33bb647"],
    },
    {
      q: "What sex is recorded in the ID number?",
      fmt: "male / female",
      h: ["64b173a181f5f89a97c721cb73005c46e25a5175a6bfa29860762e81dbaa60f9","6a83f4b7c62fb11e722cc1258ada34ae12434f24aafa441dcc05ec198afc620a","e4d868b65f31322441879cf3fe6e5c75e88eb3ad9dcf085177fbc50aaa375590","f4d7ed9438837a3df5df4c743cc8bd066d16fe021279e18e42564503bac2379f","faf98192e2aea8696b3824fd1b823081f94a4e254149c5a42f3a7914d6db6320"],
    },
  ],
  hints: [
    "The 18-digit Resident Identity Card number is defined by the national standard GB 11643-1999. It splits into 6 + 8 + 3 + 1 digits.",
    "Digits 1–6 are an administrative division code (110xxx is Beijing). Digits 7–14 are a date. The parity of digit 17 encodes something.",
  ],
  learn: `
<p>Structure of an 18-digit ID number: <span class="mono">110108 19920715 026 1</span></p>
<ul>
  <li><b>1–6</b>: administrative division code of the place of first registration (户籍) — province, city, county/district. It does <i>not</i> change when the person moves, so it shows where they were registered, usually where they were born or grew up.</li>
  <li><b>7–14</b>: date of birth, YYYYMMDD.</li>
  <li><b>15–17</b>: sequence number for people registered on the same day in that area. <b>Odd 17th digit = male, even = female.</b></li>
  <li><b>18</b>: checksum (ISO 7064 MOD 11-2), 0–9 or X. A wrong checksum means a typo or a fake.</li>
</ul>
<p>Codes come from the Ministry of Civil Affairs’ list (search <i>行政区划代码</i>). Old codes for districts that were merged or renamed are still valid on older IDs — use a historical table when the current one has no match.</p>
<p class="caveat">ID numbers are sensitive personal data under the PIPL. In real investigations, handle them as such.</p>`,
});
