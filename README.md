<div align="center">

  <h1>react-fresh-starer</h1>

  <p>
    这是一个持续更新的 React 项目起始模板，旨在简化启动新项目的流程。它提供了一个基础配置和最佳实践的基础，让您可以专注于构建应用程序，而无需设置基础设施。
  </p>
</div>

# :notebook_with_decorative_cover: 目录

- [项目简介](#star2-项目简介)
  - [技术栈](#space_invader-技术栈)
  - [环境变量](#key-环境变量)
- [开始使用](#smile-开始使用)
  - [先决条件](#bangbang-先决条件)
  - [本地运行](#school-本地运行)

## :star2: 项目简介

### :space_invader: 技术栈

<details open>
  <summary>使用的技术</summary>
  <ul>
    <li><a href="https://reactjs.org/">React</a>：用于构建用户界面的 JavaScript 库</li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a>：JavaScript 的有类型超集</li>
    <li><a href="https://pnpm.io/">pnpm</a>：快速、节省磁盘空间的包管理器</li>
    <li><a href="https://tailwindcss.com/">tailwindcss</a>：原子化 CSS 框架</li>
    <li><a href="https://zustand-demo.pmnd.rs/">Zustand</a>：客户端状态管理</li>
    <li><a href="https://tanstack.com/query/latest">Tanstack Query</a>：数据获取和缓存库</li>
    <li><a href="https://tanstack.com/router/latest">Tanstack Router</a>：类型安全路由</li>
  </ul>
</details>

<details open>
  <summary>开发工具</summary>
  <ul>
  <li><a href="https://turborepo.com/">turborepo</a>：基于Rust的monorepo方案</li>
  <li><a href="https://github.com/biomejs/biome">biome</a>：Web 项目开发的一体化工具链</li>
  <li><a href="https://vitest.dev/">vitest</a>：由 Vite 提供支持的下一代测试框架</li>
  <li><a href="https://kubb.dev/">kubb</a>：OpenAPI 到 TypeScript、React-Query、Zod、Faker.js、MSW 和 Axios</li>
    <li><a href="https://commitlint.js.org/#/">CommitLint</a>：用于常规提交消息的代码检查工具</li>
    <li><a href="https://typicode.github.io/husky/#/">Husky</a>：简化 Git 钩子的工具</li>
    <li><a href="https://github.com/okonet/lint-staged">Lint-Staged</a>：对预提交文件运行代码检查工具</li>
    <li><a href="https://github.com/webpro/knip">knip</a>：在 JavaScript 和 TypeScript 项目中查找未使用的文件、依赖项和导出</li>
    <li><a href="https://mswjs.io/">msw</a>：mock方案</li>
  </ul>
</details>

### :key: 环境变量

参考 apps/web/env 文件夹中的 .env.example 文件，并创建 .env.development.local 文件

## :smile: 开始使用

### :bangbang: 先决条件

该项目使用 pnpm 作为包管理器

```bash
 npm install --global pnpm
```

### :school: 本地运行

安装依赖

```bash
  # node ^22.12.0，pnpm ^10.26.2
  pnpm install
```

启动主应用服务

```bash
  pnpm dev:app
```

主应用根据后端 swagger 生成前端 services 层代码

```bash
  pnpm api
```

如何 mock
设置 VITE_MOCK 为 true，apps/web/src/app/handlers.ts 中引用对应的 msw handle

### 规范

- [提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
- [项目结构规范](https://feature-sliced.github.io/documentation/)
