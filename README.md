# China OSINT Challenges

Small open-source-intelligence puzzles about China. Static site, no build step: serve the folder with any web server or GitHub Pages. The visual style matches [mingzi](https://pandatracker.github.io/mingzi/).

```
index.html                 page shell
style.css                  styles (tokens shared with mingzi) + artefact mock-ups
app.js                     loading, routing (#/<id>), answer checking, hints, progress
challenges/
  manifest.js              which challenges are live, in what order, from which date
  <id>/challenge.js        one challenge: text, artefact HTML, answer hashes, write-up
  <id>/*.jpg               its images
solutions/                 answers + solution paths (git-ignored — never publish)
  <id>.md                  one per challenge
  _notes.md                reviewer notes (matching rules, fictional vs real)
tools/
  new.py                   create a challenge skeleton and add it to the manifest
  hash.py                  hash accepted answers
  check.mjs                validate manifest + all challenges
  solutions.py             combine solutions into solutions/ALL.md for review
```

Run locally: `python3 -m http.server` → http://localhost:8000. Answer checking uses WebCrypto, so it needs `http://localhost` or `https://`.

## Weekly routine

**Add a challenge**

```
python3 tools/new.py expressway --from 2026-11-09     # folder + solution stub + manifest entry
# edit challenges/expressway/challenge.js, drop images into challenges/expressway/
python3 tools/hash.py expressway 0 "G4" "Jinggang'ao Expressway"   # paste output into h: [...]
node tools/check.mjs                                   # must say OK
```

With `--from`, the challenge stays hidden until that date and shows a **new** badge for 14 days after it. You can deploy it in advance. Open the site with `?preview` to see scheduled challenges early.

**Remove a challenge:** delete or comment out its line in `challenges/manifest.js`. The folder can stay. `check.mjs` lists it as hidden, so it's easy to bring back.

**Reorder:** move lines in the manifest. Numbers (#01, #02 …) follow the manifest order. Player progress is stored by id, so reordering and removing never lose anyone's progress.

**Review answers:** `python3 tools/solutions.py` writes `solutions/ALL.md` in manifest order.

## Writing a challenge

- `id` must match the folder name. It also salts the answer hashes, so never rename an id after hashing.
- `level`: Easy, Medium, Hard or Expert. `zh`: one character used as the card icon; `check.mjs` warns about duplicates.
- In `artifact` and `learn`, refer to the challenge's own files as `{{dir}}/photo.jpg`.
- Every accepted spelling needs its own hash. Normalisation already ignores case, spaces, punctuation, pinyin tone marks and one trailing `city / district / province / shi / qu / sheng / 市 / 区 / 省`.
- Hashes only stop people reading answers from the source. Short answers can still be brute-forced, which is fine for a learning site.

**Images:** use freely licensed photos (e.g. Wikimedia Commons). Credit the author and licence in the caption **without a link**, because Commons file names often contain the answer. Put the source link in `learn`, which is only shown after solving, and in the credits below. Strip EXIF/GPS data, which can also give the answer away.

## Image credits

- `challenges/plate/plate-carpark.jpg` — HHAFOL Moratim LUNG, [car parking, Zhongshan, August 2024](https://commons.wikimedia.org/wiki/File:GD_%E5%BB%A3%E6%9D%B1_ZS_%E4%B8%AD%E5%B1%B1%E5%B8%82_Zhongshan_%E6%9D%B1%E5%8D%80_Dong_District_%E8%88%88%E6%94%BF%E8%B7%AF_XingZheng_Road_car_parking_August_2024_R12S_01.jpg), CC0 (resized, metadata stripped).
- `challenges/weibo/weibo-panda.jpg` — David Xuang, [The panda at IFS Chengdu from Hongxing Road](https://commons.wikimedia.org/wiki/File:The_panda_at_IFS_Chengdu_from_Hongxing_Road.jpg), CC BY-SA 4.0 (resized). Sculpture *I Am Here* by Lawrence Argent.
- `challenges/cross/cross-plates.jpg` — InSapphoWeTrust, [Toyota Estima Hong Kong, Dual Registration…](https://commons.wikimedia.org/wiki/File:Toyota_Estima_Hong_Kong,_Dual_Registration_China_cross-border_Guangdong-%E7%B2%A4Z_4201%E6%B8%AF.jpg), CC BY-SA 2.0.
- `challenges/ports/ports-map-1899.jpg` — U.S. Bureau of Statistics, [Commercial Map of China, 1899](https://commons.wikimedia.org/wiki/File:1899_United_States_Government_Commercial_map_of_China,_showing_treaty_ports,_ports_of_foreign_control,_railways,_telegraphs,_waterways.jpg), public domain (cropped).
- `challenges/regs/aircraft-regs.jpg`: composite of crops, licensed CC BY-SA 4.0. Sources:
  - [B-LGD](https://commons.wikimedia.org/wiki/File:Hong_Kong_Airlines_Airbus_A350-900_B-LGD.jpg), Melv_L, CC BY-SA 2.0
  - [B-16311](https://commons.wikimedia.org/wiki/File:B-16311_Airbus_A330_Eva_Air_(7581978222).jpg), Aeroprints.com, CC BY-SA 3.0
  - [B-9942](https://commons.wikimedia.org/wiki/File:20231218_Airbus_A320-214(WL)_of_China_Eastern_Airlines_(B-9942)_at_PKX.jpg), Zheng Zhou, CC BY-SA 4.0
  - [B-MBA](https://commons.wikimedia.org/wiki/File:Air_Macau,_Airbus_A321-231,_B-MBA_(25257928181).jpg), Masahiro TAKAGI, CC BY 2.0
- `challenges/boat/fishing-carrier.jpg` — kitmasterbloke, [MV Lu Rong Yuan Yu Yun](https://commons.wikimedia.org/wiki/File:MV_Lu_Rong_Yuan_Yu_Yun.jpg), CC BY 2.0.
- `challenges/canto/mtr-sign.jpg` — Yejianfei, [Cantonese at MTR station, Hong Kong](https://commons.wikimedia.org/wiki/File:Cantonese_at_MTR_station,_Hong_Kong.jpg), CC BY 4.0 (resized).
- `challenges/taiwan/shilin-sign.jpg` — Tianmu peter, [捷運士林站橋下空間機車停車場標誌](https://commons.wikimedia.org/wiki/File:%E6%8D%B7%E9%81%8B%E5%A3%AB%E6%9E%97%E7%AB%99%E6%A9%8B%E4%B8%8B%E7%A9%BA%E9%96%93%E6%A9%9F%E8%BB%8A%E5%81%9C%E8%BB%8A%E5%A0%B4%E6%A8%99%E8%AA%8C_20080303.jpg), CC BY 3.0 (resized).
- `challenges/coname/ringpu-sign.jpg` — wsklutz, [天津瑞普生物技术股份有限公司大门](https://commons.wikimedia.org/wiki/File:%E5%A4%A9%E6%B4%A5%E7%91%9E%E6%99%AE%E7%94%9F%E7%89%A9%E6%8A%80%E6%9C%AF%E8%82%A1%E4%BB%BD%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%97%A8_-_panoramio.jpg), CC BY-SA 3.0 (resized).
- `challenges/coname/crrc-gate.jpg` — Amarespeco, [中车齐齐哈尔车辆有限公司大门](https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E8%BD%A6%E9%BD%90%E9%BD%90%E5%93%88%E5%B0%94%E8%BD%A6%E8%BE%86%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%97%A82017%E5%A4%8F.jpg), CC BY-SA 4.0 (cropped).
- `challenges/stamp/watermark-checkin.jpg` — base photo by Renek78, [Shenzhen Bao'an International Airport Terminal 3 in September 2025](https://commons.wikimedia.org/wiki/File:Shenzhen_Bao%27an_International_Airport_Terminal_3_in_September_2025.jpg), CC0. The watermark stamp is fictional and was added for the challenge.
