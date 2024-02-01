set -e
rm -rf ./node_modules/.pnpm
npm i -g pnpm@8.x.x
pnpm install
pnpm run build
