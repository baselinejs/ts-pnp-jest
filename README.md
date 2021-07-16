# ts-pnp-jest

Simplest Typescript, Jest-based app that can be installed with any package manager, including yarn 1.x, yarn 2 PNP, or NPM, and incorporates our standard components of eslint, prettier.

# Install (Yarn 2.x PNP)

```bash
$ yarn teardown
$ yarn set version sources # or berry
$ yarn install
$ yarn pnpify --sdk vscode
```

# Install (Yarn 1.x)

```bash
$ yarn teardown
$ yarn install
```

# Install (NPM)

```bash
$ npm run teardown
$ npm install
```

# Switching Between Package Managers

Use the `teardown` script in the `package.json` file to remove all generated files that were previously created when installing the app via `yarn` or `npm`. The `teardown` script makes it easier to switch from one package manager to another.  For example, if you wanted to switch back from Yarn 2 PNP to Yarn 1.x:

```bash
$ yarn teardown
$ yarn install
```

# PNP, JEST and VSCode

In VSCode, if Jest keywords like `describe` and `expect` are showing as undefined, do a "Developer: Reload Window" from the Command Palette to resolve that.

# Foundations:

Language: Typescript
Module System:  Yarn 2 Plug-n-Plug (berry)
Test Runner:  Jest
Code Quality:  ESLint, Prettier


# VS-Code

VS-Code Plugins used:

1. firsttris.vscode-jest-runner
2. arcanis.vscode-zipfs
3. dbaeumer.vscode-eslint
4. esbenp.prettier-vscode
