defineChallenge({
  id: "tablet",
  zh: "谱",
  title: "Family Tree",
  level: "Expert",
  tags: ["genealogy", "calendars", "historical dates"],
  brief:
    "A client is tracing an ancestor and sends a photo of a page from their family’s genealogy (族谱). They need the dates in Gregorian form for a Western archive request — and want to know how old he really was.",
  artifact: `
<figure class="art">
  <div class="zupu" lang="zh-Hant">
    <div class="zp-k">陳氏族譜 · 卷三</div>
    <p><b>十八世</b>　德昌公，字子茂。生於<b>光緒丙午年八月十五日</b>，卒於<b>戊子年三月初十日</b>，享年<b>四十三歲</b>。配林氏，生子二：長子世榮，次子世華。</p>
  </div>
  <figcaption>Genealogy page (re-typed; fictional family).</figcaption>
</figure>`,
  questions: [
    {
      q: "On which Gregorian date was he born?",
      fmt: "YYYY-MM-DD",
      h: ["f532dc4cfa605b31980f8d66781c35f910186c659fdc0bccbbe8f1764c526e66"],
    },
    {
      q: "On which Gregorian date did he die?",
      fmt: "YYYY-MM-DD",
      h: ["179b8cdf825af2353583c1877ecfad21a8217f8d08b06a7db32dcabe1acad206"],
    },
    {
      q: "How old was he at death, in completed (Western) years?",
      fmt: "Number",
      h: ["3648542aade1cc4c3cf1d991555153e0d6e54db70bfa001f5ee9cc2eceb872c1","3669dcb7889b4a4a57e144b30ef1b72b639ecf96142081524034f497f3579bb9","3941e3d18fe7afcfcc078bd773e4389a2c297f29c188dea1b062fbda3722e748","948c1b3e2f15d14d11c74a7a26d665452f6ac341cab168d65af117e56b82f6e7"],
    },
  ],
  hints: [
    "光緒 is the reign of the Guangxu Emperor (1875–1908). 丙午 and 戊子 are names in the 60-year sexagenary cycle (干支): each one comes back every 60 years. Only one 丙午 falls in the Guangxu reign.",
    "戊子 could be several years. 享年四十三歲 is counted in 虛歲 (“nominal age”): you are 1 at birth and gain a year every Lunar New Year. Pick the 戊子 that fits, then convert both lunar dates — the Hong Kong Observatory publishes Gregorian–lunar tables for 1901–2100.",
  ],
  learn: `
<p>Chinese genealogies, gravestones and historical records rarely use Gregorian dates. You need three tools:</p>
<ul>
  <li><b>Reign years</b> (年号): 光緒 Guangxu = 1875–1908, so 光緒丙午 = Guangxu 32 = <b>1906</b>. After 1912 records switch to 民國 years (year + 1911) — or just the cycle name, as here.</li>
  <li><b>Sexagenary cycle</b> (干支): 戊子 recurs every 60 years — 1888, <b>1948</b>, 2008. Born in 1906 and dying at a 虚岁 age of 43 means he died in the 43rd lunar year counting 1906 as the first: 1948.</li>
  <li><b>Lunar → Gregorian</b>: 1906, month 8 day 15 (the Mid-Autumn Festival) = <b>2 Oct 1906</b>; 1948, month 3 day 10 = <b>18 Apr 1948</b>. Use the Hong Kong Observatory tables (<span class="mono">hko.gov.hk</span> → Gregorian–Lunar calendar) and watch for leap months (閏月) — 1906 had a leap 4th month.</li>
</ul>
<p><b>虛歲 vs 周歲.</b> His “43” is a nominal age; in completed years he was <b>41</b>. Ages in Chinese obituaries, older documents and some interviews are often 虛歲 — one or two years more than the Western age. Using the wrong one shifts a birth year you work out from an age.</p>`,
});
