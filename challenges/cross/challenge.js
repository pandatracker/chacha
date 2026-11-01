defineChallenge({
  id: "cross",
  zh: "港",
  title: "Two Systems",
  level: "Easy",
  tags: ["vehicles", "border crossings"],
  brief:
    "You are investigating a network suspected of moving counterfeit luxury goods across the border into mainland China. A source photographed a minivan that keeps appearing outside one of the network’s storage units. It carries two number plates, one above the other. Before you request any records, work out what the plates tell you about where the vehicle is from and where it is allowed to go.",
  artifact: `
<figure class="art">
  <img src="{{dir}}/cross-plates.jpg" width="800" height="600"
    alt="Rear of a silver Toyota Estima minivan at dusk: a yellow plate FS 3632 above a black plate 粤Z 4201港; a red taxi in the background">
  <figcaption>Source photo (real vehicle, unrelated to any investigation). Photo: InSapphoWeTrust, Wikimedia Commons, CC BY-SA 2.0.</figcaption>
</figure>`,
  questions: [
    {
      q: "Where is the car originally registered (the yellow plate)?",
      fmt: "Place name",
      h: ["01e502fdfd9e402baeb25d5ba55cb526cd892098d831831b1587bac77a343c75","40afc85f09184b805642c9b4858814c4a16a558a31a0bcb682ec9bcf7d5993c8","5c9f7e400bdb0834300b7606d731ace9c7b81c8cbddb23ca3bac909f23bcb0ce","7f68e80f919e69d69c098758bd635b1f3973bc07ac4d7b2a0f90040e3712a1b1","a5f53f45a555610f30b2c2bb783d881b6bfcd794c0e54c96fdb40fce13be69c5","c1f3ebe09b60a8b4984b8ce90552fb95c9020a3374617686010058b5c1285fd8"],
    },
    {
      q: "Which province issued the black plate?",
      fmt: "Province name",
      h: ["37577e64ef1a424db5005506a4a96619216d8d3ea0aa2b231646be1475c67868","594d7b3d0b3119796e6601fc33c53ab44454bfa4502bcf969855fdca1f95ced0","60fb1bfe80471087d8167173671c1b16c0d63074a1f714cac542b7538c159a7b","a94e4c241b2069c1940bb951d59301d78292f18a7fa25ab962810e65ee7d8cda","e4987abf4efca566715e0ff48a509ab6676038bac7cb59d99798272dfe6819b1"],
    },
  ],
  hints: [
    "Black mainland plates are issued to foreign-owned and cross-border vehicles. Look at the last character.",
    "Rear plates are yellow in one place right next to Guangdong. The Z after the province abbreviation is a special series, not a city.",
  ],
  learn: `
<p>Vehicles that regularly cross between Guangdong and Hong Kong or Macao carry <b>two plates</b>: their home plate and a black mainland plate in the <b>粤Z</b> series ending in <b>港</b> (Hong Kong) or <b>澳</b> (Macao). Z is reserved for this; it doesn’t stand for a city.</p>
<p>Hong Kong plates are white at the front and <b>yellow at the rear</b>, with two letters and up to four digits, or a personalised mark. Owner records in Hong Kong are restricted — the Transport Department releases them only for declared purposes. But cross-border plates are quota-limited and often tied to a company with operations on both sides, which gives an investigation a pivot: which Hong Kong and Guangdong companies hold cross-border quotas, and who runs them?</p>
<p class="caveat">Since July 2023 the “Northbound Travel for Hong Kong Vehicles” scheme (港车北上) lets Hong Kong private cars enter Guangdong over the Hong Kong–Zhuhai–Macao Bridge <i>without</i> a 粤Z plate, so not every Hong Kong car on mainland roads has one.</p>
<p class="hint">Photo source: <a href="https://commons.wikimedia.org/wiki/File:Toyota_Estima_Hong_Kong,_Dual_Registration_China_cross-border_Guangdong-%E7%B2%A4Z_4201%E6%B8%AF.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (InSapphoWeTrust, CC BY-SA 2.0). Taken in Hong Kong in 2008.</p>`,
});
