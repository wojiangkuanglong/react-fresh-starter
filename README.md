<div align="center">

  <h1>react-template</h1>

  <p>
    这是一个持续更新的 React 项目起始模板，旨在简化启动新项目的流程。它提供了一个基础配置和最佳实践的基础，让您可以专注于构建应用程序，而无需设置基础设施。
  </p>

</div>

<br />

# :notebook_with_decorative_cover: 目录

- [项目简介](#star2-about-the-project)
  - [技术栈](#space_invader-tech-stack)
  - [环境变量](#key-environment-variables)
- [开始使用](#toolbox-getting-started)
  - [先决条件](#bangbang-prerequisites)
  - [本地运行](#running-run-locally)
  - [协作调试](#wave-collaboration-debugging)
  - [部署](#triangular_flag_on_post-deployment)
- [待办](#compass-roadmap)

## :star2: 项目简介

### :space_invader: 技术栈

<details open>
  <summary>使用的技术</summary>
  <ul>
    <li><a href="https://reactjs.org/">React</a>：用于构建用户界面的 JavaScript 库</li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a>：JavaScript 的有类型超集</li>
    <li><a href="https://pnpm.io/">pnpm</a>：快速、节省磁盘空间的包管理器</li>
    <li><a href="https://tailwindcss.com/">tailwindcss</a>：实用优先的 CSS 框架</li>
    <li><a href="https://zustand-demo.pmnd.rs/">Zustand</a>：React 的小型、快速和可扩展的状态管理器</li>
    <li><a href="https://tanstack.com/query/latest">React Query</a>：用于 React 的数据获取和缓存库</li>
     <li><a href="https://react.i18next.com/">react-i18next</a>：使用 i18next 国际化生态系统。</li>
  </ul>
</details>

<details open>
  <summary>开发工具</summary>
  <ul>
  <li><a href="https://github.com/biomejs/biome">biome</a>：Web 项目开发的一体化工具链</li>
  <li><a href="https://vitest.dev/">vitest</a>：由 Vite 提供支持的下一代测试框架</li>
  <li><a href="https://github.com/testing-library/react-testing-library">kubb</a>：OpenAPI 到 TypeScript、React-Query、Zod、Faker.js、MSW 和 Axios</li>
    <li><a href="https://commitlint.js.org/#/">CommitLint</a>：用于常规提交消息的代码检查工具</li>
    <li><a href="https://typicode.github.io/husky/#/">Husky</a>：简化 Git 钩子的工具</li>
    <li><a href="https://github.com/okonet/lint-staged">Lint-Staged</a>：对预提交文件运行代码检查工具</li>
    <li><a href="https://github.com/webpro/knip">knip</a>：在 JavaScript 和 TypeScript 项目中查找未使用的文件、依赖项和导出</li>
  </ul>
</details>

### :key: 环境变量

参考 env 文件夹中的 .env.example 文件，并创建 .env.development 和 .env.production 文件

## :smile: 开始使用

### :bangbang: 先决条件

该项目使用 pnpm 作为包管理器

```bash
 npm install --global pnpm
```

### :school: 本地运行

克隆项目

```bash
  git clone https://github.com/wojiangkuanglong/react-fresh-starter.git
```

进入项目目录

```bash
  cd react-template
```

安装依赖

```bash
  # node ^22.x.x，pnpm ^10.x.x
  pnpm install
```

启动服务

```bash
  pnpm start
```

或

```bash
  pnpm dev
```

### 规范

- [提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
- [项目结构规范](https://feature-sliced.github.io/documentation/)
  ![](https://w1.kskwai.com/udata/pkg/team-corp-all/metrics-platform/visual_schema-e826067f573946613dcdc76e3f585082.jpg)

### 根据后端 swagger 生成前端 ts model、api、react-query 代码

```bash
  pnpm api
```

### :wave: 协作调试

- #### 测试环境

  - 在 vite.config.ts 中配置服务器代理
  - 在 env 目录中基于 .env.example 创建 .env.development.local 文件，将 VITE_PROXY_TARGET 设置为后端地址。

- #### 生产环境

  设置 VITE_PROXY_COOKIE，
  建议使用 [whistle](https://wproxy.org/whistle/) 与 [Proxy SwitchyOmega 浏览器拓展](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif).

### :triangular_flag_on_post: 部署

要部署此项目，请运行

```bash
  pnpm release
```

1. 对 'publish' 分支发起 MR（合并请求）。
2. 在成功部署并完成线上回归后，本地执行 git checkout publish 并拉取最新代码。
3. 运行 pnpm run release 自动更新 CHANGELOG 并基于提交创建标签。
4. 执行 git push --follow-tags origin publish。
5. 在 Gitlab 上从 'publish' 向 'master' 发起 MR。
