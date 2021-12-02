#!/bin/bash

DAY=$1
HEADER="Cookie: session=${AOCSESSIONCOOKIE}"
URL="https://adventofcode.com/2021/day/${DAY}/input"
INPUT=$(curl -s -H "${HEADER}" "${URL}")
perl -0777 -pe 's/export const DAY'"${DAY}"' = .*?;\n//smg' -i data.js
echo "export const DAY${DAY} = \`${INPUT}\`;" >> data.js
