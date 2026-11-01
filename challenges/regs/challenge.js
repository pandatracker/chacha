defineChallenge({
  id: "regs",
  zh: "机",
  title: "Four B’s",
  level: "Easy",
  tags: ["aviation", "registrations"],
  brief:
    "You are tying aircraft seen in spotter photos to their operators. All four registrations below start with “B-”, the ICAO nationality mark for China. But they belong to four different aircraft registers. Before you look anything up, which register does each belong to?",
  artifact: `
<figure class="art">
  <img class="wide" src="{{dir}}/aircraft-regs.jpg" width="1088" height="648"
    alt="Four crops of aircraft registrations: A shows B-LGD on a white and red fuselage; B shows B-16311 under a wing; C shows B-9942 in italic beside a door; D shows B-MBA next to an Airbus logo">
  <figcaption>Crops from photos by Melv_L (CC BY-SA 2.0), Aeroprints.com (CC BY-SA 3.0), Zheng Zhou (CC BY-SA 4.0) and Masahiro TAKAGI (CC BY 2.0), Wikimedia Commons. Composite CC BY-SA 4.0.</figcaption>
</figure>`,
  questions: [
    {
      q: "Which register is aircraft A on?",
      fmt: "Place name",
      h: ["26f2ba3089e40a4678a3025f8f104a0c1229c22fc4bee16e5cd29caa3563deb6","45c00a109cb8ad6a3e7e93b3b90d2e85bc586b060f73e20905a33ca9b0a3b392","8133362c96c1c90ce1536e7fc83b5750c1f9ee2fa4b21b054ff7e8a645776044","aa320e94a7c3d55b0d71848365cd4612fdf8c2c55bf90fe6ecd8d9a9095034ee","dd37cd588dddfe787c1c14414667a62976d0fccfb763b4a5ec2772cf7df0c355"],
    },
    {
      q: "Which register is aircraft B on?",
      fmt: "Place name",
      h: ["1445ae8f02c9a51516d1066bba5a7bd9770368258f8cedebf36f7e0b6159515b","1dfe3022bd003c446d5adb14e0c7af132ee25e0c339bdc7be103d4c3ae305ba9","64e568c292ed2b42263abced4bd1642d22cec9619c0088ca91cb8ea266b91114","701da418149efada270ec190daca5b9f481445d2f13a7dbc35080ea72eed33f8","aa8cc304bf561e0d56ca242a9f0cacb61ec312d3bd43e57fa50341325c565751","bfd129fecd7473ff64ceae53d74429308c97bf7c6a634fd6192c714abb5d6a51","ee6bdc44662ed767606fde235f22ffbb4b9f727b630c8bd6156e238cfbe4df38","fb49dae36929ade7261281ddd834ea81d6fdd4baf489ee8dad91751232091c1a"],
    },
    {
      q: "Which register is aircraft C on?",
      fmt: "Place name",
      h: ["0e1a19ee005a2a0574b4fafcc3f6bc2c8ae6f8e7e8ee8e1970bc6d944acae90e","1b146904d3d084ceff85a4e5fbbd7e94018114d2bfdbcaa6b2933b2f1a03d8fb","2b51c154e18f8e7041844dcd1a637327f294833feeffc140b8f227d1d8a0897b","3d1f2f5490945d81630d318a5749b8bf55f2c185e4b15b4f946123a4c06fb68e","46d0177caea017a00e432e9f9248b88ffce33620d595aa7d448911f22518c95b","9053908827f07cdc4e4c1db7551c8c34edcadfe6a1e0894524cc825c4daf91ec","a998c2e3a025557a987d9d7f7f0d0f462abc17eacddca87e118e0815f41bab86","cad075db935865504c5ffd4a5e9fa74d5cb1f3c8db37400caba1081defb07f45","cf8d8671e9216efb6fc4040bccf366c50fa842b85a8d0937bbfc1860032aea84","d3794703f056d82a22fd99b71b510f714966628c37b16b7172976d7796168735","e4eb815ecd5890538f8517a7d9ab6191527335cfaa0c76f4844f0974e0046cc9"],
    },
    {
      q: "Which register is aircraft D on?",
      fmt: "Place name",
      h: ["2df34cba0893294192a73471dded959c2c0d0881fcb94ab5351632b0c276d0f7","569427b602267f19e36e710812d6a1113eb7cbcd7b792f8e6720822765e98980","61892f508f95e6db29beca6bdf2693addd94b0ef77981d2607a862ae71cb3ef1","63d61c261aa50390ebd1a0fdc99eedf00916994f54078a51048e3617b5649bc7","6d4c91761cc06541275baf1189f093f5b5d3d9c99c08dddffbe1f11c2d9646ec","7770f6bcf47bb9a3ef9f85383a84cb5456ec882b3e830cb4f4ae4c20cef03b1e"],
    },
  ],
  hints: [
    "Four jurisdictions share the B- prefix: mainland China, Hong Kong, Macao and Taiwan. They differ in what comes after the hyphen.",
    "Count the characters and look at the first letter after “B-”: letters starting with H, K or L; letters starting with M; five digits; or four characters.",
  ],
  learn: `
<p>The ICAO nationality mark <b>B</b> is shared by four separate civil aircraft registers:</p>
<ul>
  <li><b>Mainland China</b> (CAAC): B- + four characters, e.g. <b>B-9942</b> (mostly digits; newer registrations can mix in letters).</li>
  <li><b>Hong Kong</b> (Civil Aviation Department): B-H.., B-K.., B-L.. + two more letters, e.g. <b>B-LGD</b>.</li>
  <li><b>Macao</b> (AACM): B-M.. + two letters, e.g. <b>B-MBA</b>.</li>
  <li><b>Taiwan</b> (CAA, ROC): B- + five digits, e.g. <b>B-16311</b>.</li>
</ul>
<p>Each register has its own rules, operators and public records: Hong Kong publishes its register, for example. Getting the jurisdiction wrong sends you to the wrong registry and the wrong owner. Then go to flight-tracking data (ADS-B Exchange, Flightradar24) and spotter databases (planespotters.net, airfleets) for history: earlier registrations, lessors, private owners of business jets.</p>
<p class="hint">Sources: <a href="https://commons.wikimedia.org/wiki/File:Hong_Kong_Airlines_Airbus_A350-900_B-LGD.jpg" target="_blank" rel="noopener">A</a>, <a href="https://commons.wikimedia.org/wiki/File:B-16311_Airbus_A330_Eva_Air_(7581978222).jpg" target="_blank" rel="noopener">B</a>, <a href="https://commons.wikimedia.org/wiki/File:20231218_Airbus_A320-214(WL)_of_China_Eastern_Airlines_(B-9942)_at_PKX.jpg" target="_blank" rel="noopener">C</a>, <a href="https://commons.wikimedia.org/wiki/File:Air_Macau,_Airbus_A321-231,_B-MBA_(25257928181).jpg" target="_blank" rel="noopener">D</a> on Wikimedia Commons.</p>`,
});
