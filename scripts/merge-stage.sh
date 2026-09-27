#!/usr/bin/env bash
# Usage: scripts/merge-stage.sh <branch> <stage-number> "<title>" — merge, publish, verify, push (aborts on any failure).
set -euo pipefail
cd "$(dirname "$0")/.."
git merge --no-ff -q "$1" -m "Merge Stage $2: $3

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
node scripts/publish-stage.mjs "$2"
(cd app && npx tsc -b && npx vitest run --reporter=dot > /tmp/vitest-$2.log 2>&1 || { tail -30 /tmp/vitest-$2.log; exit 1; })
grep -E "Tests " /tmp/vitest-$2.log
git add -A
git commit -qm "Publish Stage $2

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
git push -q
echo "stage $2 merged and pushed"
