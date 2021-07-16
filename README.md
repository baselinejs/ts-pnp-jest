# ts-pnp-jest

Simplest Typescript, Jest-based app that can be installed with any package manager, including yarn 1.x, yarn 2 PNP, or NPM, and incorporates our standard components of eslint, prettier.

# Install (Yarn 2.x PNP)

```bash
$ yarn teardown # or $ npm run teardown
$ yarn set version berry # Use Yarn 2 PNP - use the GA version by default
$ yarn set version from sources # optional, switches from GA to latest version
$ yarn install
$ yarn pnpify --sdk vscode
$ yarn test
```

# Install (Yarn 1.x)

```bash
$ yarn teardown # or $ npm run teardown
$ yarn install
$ yarn test
```

# Install (NPM)

```bash
$ npm run teardown
$ npm install
$ npm run test
```

# Switching Between Package Managers

Use the `teardown` script in the `package.json` file to remove all generated files that were previously created when installing the app via `yarn` or `npm`. The `teardown` script makes it easier to switch from one package manager to another.  For example, if you wanted to switch back from Yarn 2 PNP to Yarn 1.x:

```bash
$ yarn teardown
$ yarn install
```

NOTE: Yarn PNP sometimes sets key pairs in the `package.json` file that can prevent switching back to Yarn 1.x or NPM. Before installing, make sure neither of these key pairs were added to `package.json`.

```yml
  "installConfig": { "pnp": true },
  "packageManager": "yarn@2.4.2"
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
