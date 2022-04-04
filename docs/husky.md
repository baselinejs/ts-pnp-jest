# Husky, Lint-Staged & Commitlint Support

To add support for Git commit hooks using Husky, run the following commands after running `yarn` or `npm install`. After running the commands below, you can commit the `.husky/` folder
these commands will create to avoid having to repeat these steps after every `yarn` or `npm install`.

```bash
$ npx husky install
$ npx husky add .husky/pre-commit 'echo "Pre-Commit Hook:"'
$ npx husky add .husky/pre-push 'echo "Pre-Push Hook:"'
$ npx husky add .husky/commit-msg 'echo "Commit-Msg Hook:"'
```

This will create a `.husky/` folder containing files for each Git hook.  For each of these files, add the following `npx` commands as the last line:

```bash
# .husky/commit-msg
npx commitlint --edit "$1"
```

```bash
# .husky/pre-commit
npx lint-staged
```

```bash
# .husky/pre-push
npx prepush-if-changed 
```

NOTE 1: The .husky directory is not removed by `teardown` because you could have edits in there. If not, you can remove the path manually and run `husky init` to recreate it after reinstall.

NOTE 2: If using Yarn 2.x PnP, use `yarn dlx` instead of `npx` in the above files.

NOTE 3: For Husky to work in SourceTree and other Git clients, you may need to ensure that Husky has the correct path, that matches `which node`:

```rc
# ~/.huskyrc
export PATH="/usr/local/bin/:$PATH"
```

NOTE 4: GitKraken may have some issues with Husky because it doesn't respect Git's core.hooksPath setting.  Workaround is:

```bash
$ rm -rf .git/hooks && ln -s .husky .git/hooks # GitKraken doesn't use respect Git's core.hooksPath setting
```
