#!/usr/bin/env python3
"""Combine solutions/*.md into one review file, in manifest order.

Usage:
  python3 tools/solutions.py            -> writes solutions/ALL.md

Challenges not in the manifest are appended under "Hidden challenges".
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOL = ROOT / "solutions"


def manifest_ids():
    text = (ROOT / "challenges" / "manifest.js").read_text(encoding="utf-8")
    body = text[text.index("CHALLENGE_MANIFEST"):]
    lines = [l for l in body.splitlines() if not l.strip().startswith("//")]
    return re.findall(r'^\s*(?:"([\w-]+)"|\{\s*id:\s*"([\w-]+)")', "\n".join(lines), re.M)


def main():
    ids = [a or b for a, b in manifest_ids()]
    parts = [(SOL / "_notes.md").read_text(encoding="utf-8").rstrip(), ""]
    for n, cid in enumerate(ids, 1):
        f = SOL / f"{cid}.md"
        body = f.read_text(encoding="utf-8") if f.exists() else f"# `{cid}`\n\n_No solution file._\n"
        parts += ["---", "", re.sub(r"^# ", f"## {n:02d} · ", body.rstrip(), count=1), ""]
    hidden = sorted(p.stem for p in SOL.glob("*.md") if p.stem not in ids and p.stem not in ("_notes", "ALL"))
    if hidden:
        parts += ["---", "", "# Hidden challenges (not in manifest)", ""]
        for cid in hidden:
            parts += [re.sub(r"^# ", "## ", (SOL / f"{cid}.md").read_text(encoding="utf-8").rstrip(), count=1), ""]
    (SOL / "ALL.md").write_text("\n".join(parts) + "\n", encoding="utf-8")
    print(f"Wrote solutions/ALL.md ({len(ids)} live, {len(hidden)} hidden)")


if __name__ == "__main__":
    main()
