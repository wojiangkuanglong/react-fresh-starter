<div align="center">

  <h1>React Fresh Starter</h1>

  <p>
    This is a continuously updated React project starter template designed to streamline the process of initiating new projects. It provides a foundation with essential configurations and best practices, allowing you to focus on building your application without the hassle of setting up the basics.
  </p>

<p>
  <a href="https://github.com/wojiangkuanglong/react-fresh-starter">
    <img src="https://img.shields.io/github/contributors/wojiangkuanglong/react-fresh-starter" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/wojiangkuanglong/react-fresh-starter" alt="last update" />
  </a>
  <a href="https://github.com/wojiangkuanglong/react-fresh-starter/network/members">
    <img src="https://img.shields.io/github/forks/wojiangkuanglong/react-fresh-starter" alt="forks" />
  </a>
  <a href="https://github.com/wojiangkuanglong/react-fresh-starter/stargazers">
    <img src="https://img.shields.io/github/stars/wojiangkuanglong/react-fresh-starter" alt="stars" />
  </a>
  <a href="https://github.com/wojiangkuanglong/react-fresh-starter/issues/">
    <img src="https://img.shields.io/github/issues/wojiangkuanglong/react-fresh-starter" alt="open issues" />
  </a>
</p>

</div>

<br />

# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Tech Stack](#space_invader-tech-stack)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Run Locally](#running-run-locally)
  - [Collaboration Debugging](#wave-collaboration-debugging)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Roadmap](#compass-roadmap)

## :star2: About the Project

### :space_invader: Tech Stack

<details open>
  <summary>Technologies Used</summary>
  <ul>
    <li><a href="https://reactjs.org/">React</a>:A JavaScript library for building user interfaces</li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a>:A typed superset of JavaScript</li>
    <li><a href="https://pnpm.io/">pnpm</a>Fast, disk space-efficient package manager</li>
    <li><a href="https://tailwindcss.com/">tailwindcss</a>:Utility-first CSS framework</li>
    <li><a href="https://zustand-demo.pmnd.rs/">Zustand</a>:A small, fast, and scaleable state management for React</li>
    <li><a href="https://tanstack.com/query/latest">React Query</a>:Data fetching and caching library for React</li>
    <li><a href="https://ui.shadcn.com/">shadcn/ui</a>:UI components library</li>
    <li><a href="https://mswjs.io/">msw</a>:Mocking HTTP requests during development and testing</li>
    <li><a href="https://github.com/acacode/swagger-typescript-api">swagger-typescript-api</a>:Generate TypeScript client for any API defined by OpenAPI Specification</li>
  </ul>
</details>

<details open>
  <summary>Tools for Development</summary>
  <ul>
     <li><a href="https://eslint.org/">ESLint</a>:A pluggable linter for JavaScript and TypeScript</li>
    <li><a href="https://prettier.io/">Prettier</a>:Opinionated code formatter</li>
    <li><a href="https://commitlint.js.org/#/">CommitLint</a>:Linting for conventional commit messages</li>
    <li><a href="https://typicode.github.io/husky/#/">Husky</a>:Git hooks made easy</li>
    <li><a href="https://github.com/okonet/lint-staged">Lint-Staged</a>:Run linters on pre-committed files</li>
    <li><a href="https://github.com/webpro/knip">knip</a>:Find unused files, dependencies and exports in your JavaScript and TypeScript projects</li>
    <li><a href="https://ls-lint.org/">ls-lint</a>:An extremely fast file and directory name linter</li>
  </ul>
</details>

### :key: Environment Variables

Reference the .env.example file in the env folder, and create .env.development and .env.production files

## :toolbox: Getting Started

### :bangbang: Prerequisites

This project uses pnpm as package manager

```bash
 npm install --global pnpm
```

### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/wojiangkuanglong/react-fresh-starter.git
```

Go to the project directory

```bash
  cd react-fresh-starter
```

Install dependencies

```bash
  # node ^18.x.x，pnpm ^8.x.x
  pnpm install
```

Start the server

```bash
  pnpm start
```

or

```bash
  pnpm dev
```

Other

```bash
# Check for unused files, export, and manage dependencies
pnpm knip

# Generate components based on plop templates
pnpm generate

# Automatically generate API based on swagger.json, default location is src/services
pnpm api

# Automatically generate Mock data based on swagger.json, default location is src/__mocks__
pnpm mock
```

### :wave: Collaboration Debugging

- #### Testing Environment

  - Configure server proxy in vite.config.ts
  - Create a .env.development.local file in the env directory based on .env.example, with VITE_PROXY_TARGET set to the backend address.

- #### Production Environment

  Set VITE_PROXY_COOKIE,
  It is recommended to use [whistle](https://wproxy.org/whistle/) with [Proxy SwitchyOmega browser extension](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif).

### :triangular_flag_on_post: Deployment

To deploy this project run

```bash
  pnpm release
```

1. Open an MR (Merge Request) against the 'publish' branch.
2. After successful deployment and completion of online regression, locally execute git checkout publish and pull the latest code.
3. Run pnpm run release to automatically update the CHANGELOG and create a tag based on commits.
4. Execute git push --follow-tags origin publish.
5. Initiate an MR from 'publish' to 'master' on Github.

## :compass: Roadmap

- [] i18n
- []
