#!/usr/bin/env python3
"""Create a new challenge skeleton and register it in the manifest.

Usage:
  python3 tools/new.py <id> [--from YYYY-MM-DD]

Creates challenges/<id>/challenge.js, solutions/<id>.md and appends the id
to challenges/manifest.js (with a release date if --from is given).
"""
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

CHALLENGE = """defineChallenge({{
  id: "{id}",
  zh: "?",
  title: "TODO title",
  level: "Easy",
  tags: ["TODO"],
  brief:
    "TODO: the scenario, in two or three sentences.",
  artifact: `
<figure class="art">
  <img src="{{{{dir}}}}/photo.jpg" width="1280" height="960" alt="TODO: describe the image">
  <figcaption>Photo: TODO author, Wikimedia Commons, TODO licence.</figcaption>
</figure>`,
  questions: [
    {{
      q: "TODO question?",
      fmt: "TODO expected format",
      h: [],
    }},
  ],
  hints: [
    "TODO first hint.",
    "TODO second hint.",
  ],
  learn: `
<p>TODO: what this teaches and where it applies.</p>`,
}});
"""

SOLUTION = """# TODO title — `{id}`
**Artefact:** TODO

| Q | Answer | Also accepted |
|---|---|---|
| TODO | **TODO** | TODO |

**Solution:** TODO
**Facts checked:** TODO
"""


def main():
    args = sys.argv[1:]
    if not args or args[0].startswith("-"):
        sys.exit(__doc__)
    cid = args[0]
    if not re.fullmatch(r"[a-z0-9][a-z0-9-]*", cid):
        sys.exit("id must be lowercase letters, digits and hyphens")
    release = None
    if "--from" in args:
        release = args[args.index("--from") + 1]
        date.fromisoformat(release)

    folder = ROOT / "challenges" / cid
    if folder.exists():
        sys.exit(f"challenges/{cid} already exists")
    folder.mkdir(parents=True)
    (folder / "challenge.js").write_text(CHALLENGE.format(id=cid), encoding="utf-8")

    sol = ROOT / "solutions" / f"{cid}.md"
    if not sol.exists():
        sol.write_text(SOLUTION.format(id=cid), encoding="utf-8")

    manifest = ROOT / "challenges" / "manifest.js"
    text = manifest.read_text(encoding="utf-8")
    entry = f'  {{ id: "{cid}", from: "{release}" }},' if release else f'  "{cid}",'
    text = re.sub(r"\n\];\s*$", f"\n{entry}\n];\n", text)
    manifest.write_text(text, encoding="utf-8")

    print(f"Created challenges/{cid}/challenge.js and solutions/{cid}.md, added to manifest.")
    print("Next: fill in the TODOs, add images to the folder, hash answers with")
    print(f'  python3 tools/hash.py {cid} 0 "answer" "variant"')
    print("then run: node tools/check.mjs")


if __name__ == "__main__":
    main()
