defineChallenge({
  id: "ccc",
  zh: "电",
  title: "Telegraph Code",
  level: "Medium",
  tags: ["identity documents", "names", "Hong Kong"],
  brief:
    "A court exhibit includes a scan of a Hong Kong identity card. The name lines were redacted, but whoever did it missed the row of four-digit numbers printed under them. (Specimen card; not a real person.)",
  artifact: `
<figure class="art">
  <div class="hkid">
    <div class="hk-top"><b>香港永久性居民身份證</b><br><small>HONG KONG PERMANENT IDENTITY CARD</small></div>
    <div class="hk-body">
      <div class="hk-photo" aria-hidden="true"></div>
      <div class="hk-f">
        <span class="hk-red">█████</span>
        <span class="hk-red">███ ███ ███</span>
        <span class="mono hk-ccc">7115 1129 2429</span>
        <span>出生日期 Date of Birth<br><b class="mono">01-01-1970</b></span>
        <span>***AZ <b class="mono">M</b></span>
      </div>
    </div>
    <div class="hk-foot mono">A******(*)</div>
    <div class="hk-spec" aria-hidden="true">樣本 SPECIMEN</div>
  </div>
  <figcaption>Redacted ID card scan (specimen).</figcaption>
</figure>`,
  questions: [
    {
      q: "What is the cardholder’s name in Chinese characters?",
      fmt: "Chinese characters",
      h: ["072868283ffb8b6651ad0777238bc5a5146799fd5e3795b1733e49ac3e0f9d7b","96de966b6206193e31be9f4f7be815f017abad4da8bf99e86c0a571ee756fd05"],
    },
    {
      q: "How would the English name line on the card most likely read?",
      fmt: "SURNAME Given Name, Hong Kong style",
      h: ["bafda999a9acf1b2dba05ef69c6d768ec7dad3c21c3108e614fcdfa635af0298","be883d240891771318cb61558b3f186d641cbbf9d483bb2dba137fecdc2ed6b1"],
    },
  ],
  hints: [
    "Each four-digit group stands for one Chinese character. Look up the Chinese Telegraph Code (中文电码 / 中文電碼).",
    "Hong Kong romanises names from Cantonese, not Mandarin. Look up the Cantonese reading (Jyutping) of each character, then think of how HK spells common surnames.",
  ],
  learn: `
<p>The <b>Chinese Telegraph Code</b> (中文电码) was designed in the 1870s to send Chinese by Morse code: each character gets a four-digit number. It is still printed under the Chinese name on <b>Hong Kong identity cards</b>, and some forms (for example US visa applications) ask for it.</p>
<p>For OSINT it’s a reliable way to <b>recover the exact characters</b> when only digits survive — redactions, OCR errors, or databases that dropped the Chinese text. The Unicode Unihan database lists the codes as <span class="mono">kMainlandTelegraph</span> and <span class="mono">kTaiwanTelegraph</span>, and many online converters use it.</p>
<p>Hong Kong English names follow the government’s Cantonese romanisation: 陳 <i>Chan</i>, 大 <i>Tai</i>, 文 <i>Man</i>. Mandarin pinyin would give <i>Chen Dawen</i> — a different-looking name for the same person.</p>
<p>Fun fact: 陳大文 / <i>Chan Tai Man</i> is Hong Kong’s “John Doe”, the name used on sample forms.</p>`,
});
