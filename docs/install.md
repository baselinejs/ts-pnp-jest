# Install (Yarn 2.x PNP)  --  [Yarn CLI Reference](https://yarnpkg.com/getting-started/migration#cli-commands)

```bash
$ yarn teardown # or $ npm run teardown
$ yarn set version berry # Use Yarn 2 PNP - use the GA version by default
$ yarn set version from sources # optional, switches from GA to latest version.
                                # NOTE: You must do both `yarn set` commands to get latest version
$ yarn
$ yarn dlx @yarnpkg/sdks vscode
$ yarn test
```

To upgrade `package.json` dependencies to the latest package versions, you can run:

```bash
$ yarn up  # non-interactive,
# Or, for interactive:
$ yarn plugin import interactive-tools
$ yarn upgrade-interative
```

To use Yarn 2.x PnP in Visual Studio Code, your `<project>.code-workspace` file should include the following settings:

```json
    {
        "settings": {
            "typescript.tsdk": ".yarn/sdks/typescript/lib",
            "typescript.enablePromptUseWorkspaceTsdk": true,
            "jestrunner.enableYarnPnpSupport": true,
            "jestrunner.detectYarnPnpJestBin": true
        }
    }
```

# Install (Yarn 1.x)  --  [Yarn CLI Reference](https://yarnpkg.com/getting-started/migration#cli-commands)

```bash
$ yarn teardown # or $ npm run teardown
$ yarn
$ yarn test
```
NOTE: Upon yarn install, if you see warnings like the following:
```bash
warning "@yarnpkg/pnpify > clipanion@3.2.0-rc.10" has unmet peer dependency "typanion@*".
warning Workspaces can only be enabled in private projects.
```
this ^ may be because the package `@yarnpkg/pnpify` is present in the `"devDependencies"` section of the `package.json` file.
Since we don't need that package unless we are installing via Yarn 2.x instructions above, you can remove that dependency
and avoid these warnings.

To upgrade `package.json` dependencies to the latest package versions, you can run:

```bash
$ yarn outdated    # show which packages are out of date
$ yarn upgrade-interative --latest
```

# Install (NPM)  --  [NPM CLI Reference](https://docs.npmjs.com/cli/v8/commands)

```bash
$ npm run teardown
$ npm install
$ npm run test
```
NOTE: Upon yarn install, if you see warnings like the following:
```bash
warning "@yarnpkg/pnpify > clipanion@3.2.0-rc.10" has unmet peer dependency "typanion@*".
warning Workspaces can only be enabled in private projects.
```
this ^ may be because the package `@yarnpkg/pnpify` is present in the `"devDependencies"` section of the `package.json` file.
Since we don't need that package unless we are installing via Yarn 2.x instructions above, you can remove that dependency
and avoid these warnings.

To upgrade `package.json` dependencies to the latest package versions, you have to install an npm module globally. `npm-check` and `npm-upgrade` are two good options:

```bash
$ npm install -g npm-check   or    $ npm install -g npm-upgrade
$ npm-check -u               or    $ npm-upgrade
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

