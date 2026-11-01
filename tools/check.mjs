#!/usr/bin/env node
// Validate challenges/manifest.js and every challenge folder.
// Usage: node tools/check.mjs        (exit code 1 if there are errors)
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CH = path.join(ROOT, "challenges");
const LEVELS = ["Easy", "Medium", "Hard", "Expert"];
const errors = [], warnings = [];
const err = (id, m) => errors.push(`${id}: ${m}`);
const warn = (id, m) => warnings.push(`${id}: ${m}`);

const mctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(CH, "manifest.js"), "utf8"), mctx);
const entries = (mctx.window.CHALLENGE_MANIFEST || []).map((e) => (typeof e === "string" ? { id: e } : e));

const seen = new Set(), icons = new Map(), today = new Date().toISOString().slice(0, 10);
const rows = [];
for (const [i, e] of entries.entries()) {
  const id = e.id;
  if (seen.has(id)) err(id, "listed twice in manifest");
  seen.add(id);
  if (e.from && !/^\d{4}-\d{2}-\d{2}$/.test(e.from)) err(id, `bad "from" date ${e.from}`);

  const file = path.join(CH, id, "challenge.js");
  if (!fs.existsSync(file)) { err(id, "challenges/" + id + "/challenge.js missing"); continue; }
  const defs = [];
  try {
    vm.runInNewContext(fs.readFileSync(file, "utf8"), { defineChallenge: (c) => defs.push(c) });
  } catch (x) { err(id, "challenge.js does not run: " + x.message); continue; }
  if (defs.length !== 1) { err(id, `challenge.js must call defineChallenge once (got ${defs.length})`); continue; }
  const c = defs[0];

  if (c.id !== id) err(id, `id inside file is "${c.id}", must match folder name`);
  for (const k of ["zh", "title", "level", "brief", "artifact", "learn"])
    if (typeof c[k] !== "string" || !c[k].trim()) err(id, `missing ${k}`);
  for (const k of ["tags", "questions", "hints"])
    if (!Array.isArray(c[k]) || !c[k].length) err(id, `missing ${k}`);
  if (c.level && !LEVELS.includes(c.level)) err(id, `level "${c.level}" not one of ${LEVELS.join("/")}`);
  if (JSON.stringify(c).includes("TODO")) warn(id, "still contains TODO");
  (c.questions || []).forEach((q, qi) => {
    if (!q.q || !q.fmt) err(id, `question ${qi} needs q and fmt`);
    if (!Array.isArray(q.h) || !q.h.length) err(id, `question ${qi} has no answer hashes (tools/hash.py ${id} ${qi} …)`);
    else if (!q.h.every((h) => /^[0-9a-f]{64}$/.test(h))) err(id, `question ${qi} has a malformed hash`);
  });
  for (const k of ["artifact", "learn"]) {
    for (const m of (c[k] || "").matchAll(/\{\{dir\}\}\/([^"'\s)>]+)/g))
      if (!fs.existsSync(path.join(CH, id, m[1]))) err(id, `${k} refers to missing file ${m[1]}`);
    if (/(src|href)="(?!https?:|#|\{\{dir\}\})/.test(c[k] || "")) warn(id, `${k} has a local link not using {{dir}}/`);
  }
  if (c.zh) { if (icons.has(c.zh)) warn(id, `icon ${c.zh} also used by ${icons.get(c.zh)}`); icons.set(c.zh, id); }
  if (!fs.existsSync(path.join(ROOT, "solutions", id + ".md"))) warn(id, "no solutions/" + id + ".md");

  const state = !e.from ? "live" : e.from > today ? `scheduled ${e.from}` : `live since ${e.from}`;
  rows.push(`${String(i + 1).padStart(2, "0")}  ${id.padEnd(12)} ${(c.level || "?").padEnd(7)} ${state}  ${c.title || ""}`);
}

const inactive = fs.readdirSync(CH, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !seen.has(d.name)).map((d) => d.name);

console.log(rows.join("\n"));
if (inactive.length) console.log(`\nNot in manifest (hidden): ${inactive.join(", ")}`);
if (warnings.length) console.log("\nWarnings:\n  " + warnings.join("\n  "));
if (errors.length) { console.log("\nErrors:\n  " + errors.join("\n  ")); process.exit(1); }
console.log(`\nOK — ${rows.length} challenges in manifest.`);
