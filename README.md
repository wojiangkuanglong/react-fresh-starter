# react-fresh-starter

react 项目启动模板

## 技术栈

- [Vite](https://vitejs.dev/)
- [tailwindcss](https://tailwindcss.com/)
- [pnpm](https://pnpm.io/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Query](https://tanstack.com/query/latest)
- [shadcn/ui](https://ui.shadcn.com/)
- [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)
- [msw](https://mswjs.io/)

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [CommitLint](https://commitlint.js.org/#/)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [knip](https://github.com/webpro/knip)
- [ls-lint](https://ls-lint.org/)

## 开发构建流程

```bash
# node ^18.x.x，pnpm ^8.x.x
# 安装
pnpm install

# 启动
pnpm start
or
pnpm dev
```

## 部分命令

```bash
# 检查项目中无用文件、导出、依赖
pnpm knip

# 根据plop模板生成组件
pnpm generate

# 根据swagger.json自动生成api, 默认位于src/services
pnpm api

# 根据swagger.json自动生成mock, 默认位于src/__mocks__
pnpm mock
```

## 环境变量

参考 env 文件夹中.env.example 文件, 创建.env.development、.env.production 文件

## 目录结构

## 联调

- ### 测试环境

  - 设置 vite.config.ts 中的 server proxy
  - env 目录下根据 .env.example 新建 .env.development.local 文件，VITE_PROXY_TARGET 为后端地址

- ### 正式环境
  设置 VITE_PROXY_COOKIE,
  推荐使用[whistle](https://wproxy.org/whistle/) + [Proxy SwitchyOmega 浏览器插件](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)

## 发布

1. 向 publish 分支发起 MR
2. 上线成功线上回归完毕后，本地 git checkout publish 并拉取最新代码
3. 执行 pnpm run release 根据 commit 自动更新 CHANGELOG 与 tag
4. 执行 git push --follow-tags origin publish
5. gitlab 上发起 publish -> master 的 MR

## 规范

[提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
