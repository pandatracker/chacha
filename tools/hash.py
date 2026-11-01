#!/usr/bin/env python3
"""Generate answer hashes for challenges.js.

Usage:
  python3 tools/hash.py <challenge-id> <question-index> "answer 1" "answer 2" ...

Prints a JS array of hashes to paste into the question's `h` field.
Normalisation must stay identical to `norm()` in app.js.
"""
import hashlib
import sys
import unicodedata

SUFFIXES = ["district", "province", "city", "shi", "qu", "sheng", "市", "区", "省"]


def norm(s: str) -> str:
    s = unicodedata.normalize("NFKD", s).lower()
    s = "".join(c for c in s if c.isalnum() and not unicodedata.category(c).startswith("M"))
    for suf in SUFFIXES:
        if s.endswith(suf) and len(s) > len(suf):
            s = s[: -len(suf)]
            break
    return s


def h(cid: str, qi: int, answer: str) -> str:
    return hashlib.sha256(f"{cid}:{qi}:{norm(answer)}".encode()).hexdigest()


if __name__ == "__main__":
    if len(sys.argv) < 4:
        sys.exit(__doc__)
    cid, qi = sys.argv[1], int(sys.argv[2])
    hashes = sorted({h(cid, qi, a) for a in sys.argv[3:]})
    print("[" + ",".join(f'"{x}"' for x in hashes) + "]")
