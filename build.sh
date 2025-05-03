set -e
rm -rf ./node_modules/.cache
rm -rf ./node_modules/.pnpm
npm i -g pnpm@10.x.x
pnpm run build
