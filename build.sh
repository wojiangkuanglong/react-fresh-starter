set -e
npm i -g pnpm@10.15.0
pnpm install --registry https://npm.corp.kuaishou.com
pnpm run build
