/*
 * Which challenges are live, and in what order.
 *
 *  - Each entry is a folder name in challenges/ (its challenge.js + images).
 *  - Remove or comment out a line to hide a challenge; its folder can stay.
 *  - Reorder lines to reorder the list (numbers are assigned automatically).
 *  - Schedule a release: { id: "xyz", from: "2026-11-09" } stays hidden before
 *    that date and is marked "new" for 14 days after it.
 *    Add ?preview to the URL to see scheduled challenges early.
 *
 * Run `node tools/check.mjs` after editing.
 */
window.CHALLENGE_MANIFEST = [
  "plate",
  "waybill",
  "footer",
  "idcard",
  "names",
  "weibo",
  "cross",
  "ccc",
  "ticket",
  "uscc",
  "moon",
  "coords",
  "mt",
  "ports",
  "nums",
  "roc",
  "cities",
  "trad",
  "ubo",
  "tablet",
  "zodiac",
  "regs",
  "slang",
  "boat",
  "court",
  // "wechat",       removed 2026-10-30
  "stamp",
  "sanctions",
  "canto",
  "taiwan",
  "coname",
];
