# ts-pnp-jest ![CI](https://github.com/pathfinderjs/pathfinder/workflows/CI/badge.svg)

Simplest Typescript, Jest-based app that can be installed with any package manager, including yarn 1.x, yarn 2 PNP, or NPM, and incorporates our standard components of eslint, prettier, husky and lint-staged.

# To Do

1. Add github workflow / CI integration
2. Add travis build status flag
3. Add publish package support / via gulp?

# Install (Yarn 2.x PNP)

```bash
$ yarn teardown # or $ npm run teardown
$ yarn set version berry # Use Yarn 2 PNP - use the GA version by default
$ yarn set version from sources # optional, switches from GA to latest version
$ yarn
$ yarn pnpify --sdk vscode
$ yarn test
```
Add Husky support:
```bash
$ npx husky-init --yarn2 && yarn
or
$ yarn dlx husky-init --yarn2 && yarn
$ rm -rf .git/hooks && ln -s ../.husky .git/hooks # GitKraken doesn't use respect Git's core.hooksPath setting
```

This will create a file `.husky/pre-commit` that calls `npm test` by default. Edit this file to call `yarn test` instead. Also, for Husky to work in SourceTree and other clients, you'll need to make sure that Husky has the correct path, that matches `which node`:

```rc
# ~/.huskyrc
export PATH="/usr/local/bin/:$PATH"
```
For lint-staged support, add the following section to `package.json`:
```yml
  "lint-staged": { "**/*.{js,ts}": [ "yarn dlx eslint --quiet --fix" ] }
```

# Install (Yarn 1.x)

```bash
$ yarn teardown # or $ npm run teardown
$ yarn
$ yarn test
```
Add Husky support:
```bash
## prepare lifecycle script renders this step unnecessary
# $ npx husky-init && yarn 
$ rm -rf .git/hooks && ln -s ../.husky .git/hooks # GitKraken doesn't use respect Git's core.hooksPath setting
```

This will create a file `.husky/pre-commit` that calls `npm test` by default. Edit this file to call `yarn test` instead. Also, for Husky to work in SourceTree and other clients, you'll need to make sure that Husky has the correct path, that matches `which node`:

```rc
# ~/.huskyrc
export PATH="/usr/local/bin/:$PATH"
```
For lint-staged support, add the following section to `package.json`:
```yml
  "lint-staged": { "**/*.{js,ts}": [ "npx eslint --quiet --fix" ] }
```

# Install (NPM)

```bash
$ npm run teardown
$ npm install
$ npm run test
```
Add Husky support:
```bash
## prepare lifecycle script renders this step unnecessary
# $ npx husky-init && yarn 
$ rm -rf .git/hooks && ln -s ../.husky .git/hooks # GitKraken doesn't use respect Git's core.hooksPath setting
```

This will create a file `.husky/pre-commit` that calls `npm test` by default. Also, for Husky to work in SourceTree and other clients, you'll need to make sure that Husky has the correct path, that matches `which node`:

```rc
# ~/.huskyrc
export PATH="/usr/local/bin/:$PATH"
```
For lint-staged support, add the following section to `package.json`:
```yml
  "lint-staged": { "**/*.{js,ts}": [ "npx eslint --quiet --fix" ] }
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


NOTE 2: The .husky directory is not removed by `teardown` because you could have edits in there. If not, you can remove the path manually and run `husky init` to recreate it after reinstall.

NOTE 3: A husky pre-commit hook is setup to run tests before commits. The `yarn test` section below will need to be changed to `npm run test` if you are switching to NPM.

```yml
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged && yarn test"
    }
  },
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
