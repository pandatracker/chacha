defineChallenge({
  id: "names",
  zh: "名",
  title: "Many Spellings",
  level: "Medium",
  tags: ["names", "romanisation"],
  brief:
    "An English-language report lists “John Lee Ka-chiu, Chief Executive of Hong Kong (since 2022)” among its sources. To search mainland Chinese sources, you need his name as they would write it.",
  artifact: `
<figure class="art">
  <div class="clip">
    <div class="clip-k">Sources cited</div>
    <ol start="7">
      <li>Government press releases, 2023–2024.</li>
      <li><b>John Lee Ka-chiu</b>, Chief Executive of the Hong Kong SAR (since 2022), public remarks.</li>
      <li>Legislative Council records.</li>
    </ol>
  </div>
  <figcaption>Excerpt from the report’s source list.</figcaption>
</figure>`,
  questions: [
    {
      q: "What is his name in Chinese characters?",
      fmt: "Chinese characters (simplified or traditional)",
      h: ["9b8da194c9897c6b6d54b83bea93d048464a2bc549639cbbf1bcc7e0262d45e3"],
    },
    {
      q: "How would mainland media write his name in Hanyu Pinyin?",
      fmt: "Surname Given-name, e.g. Xi Jinping",
      h: ["4b6be0ded3343af55bc8392435385005fd974245cbf1db2b85207d9cfed27fc1","4f8c621af0945b0f6c69ccc227b85d6237bc2fa4a8e9c13a0e530da0bec50a19","be12178b5b70dc32aef67bec921f707d62b19945ec77894b6d488e3e5cdb23c0"],
    },
  ],
  hints: [
    "“Lee Ka-chiu” is a Cantonese romanisation (Hong Kong government style): surname, then a hyphenated two-syllable given name. “John” is an English name, not part of his Chinese name.",
    "Find the characters first (Chinese Wikipedia or the HK government site), then convert them with Mandarin readings — the name tool at pandatracker.github.io/mingzi can help.",
  ],
  learn: `
<p>One Chinese name can have many Latin spellings. Hong Kong uses a Cantonese romanisation with a hyphenated given name; Taiwan often uses Wade–Giles (<i>Tsai Ing-wen</i>); Singapore and Malaysia use dialect spellings (Hokkien <i>Tan</i>, Cantonese <i>Chan</i>, Mandarin <i>Chen</i> — all 陈). Mainland sources use Hanyu Pinyin without hyphens, surname first.</p>
<p>So the dependable way to pivot is: <b>romanisation → characters → the other romanisations</b>. Search for the characters wherever you can — they are the stable identifier. Cantonese <i>Lee</i>, Mandarin <i>Li</i>, Hokkien <i>Lie</i> are all 李.</p>
<p>The same person can appear in English as <i>John Lee</i>, <i>Lee Ka-chiu</i>, <i>John Lee Ka-chiu</i> and <i>Li Jiachao</i>. Searching only one of them misses the others.</p>`,
});
