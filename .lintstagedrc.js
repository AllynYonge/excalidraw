const { ESLint } = require("eslint");

// see https://github.com/okonet/lint-staged#how-can-i-ignore-files-from-eslintignore-
// for explanation
const cli = new ESLint({});

module.exports = {
  "*.{js,ts,tsx}": files => {
    return (
      "eslint --max-warnings=0 --fix " + files.filter(file => !cli.isPathIgnored(file)).join(" ")
    );
  },
  "*.{css,scss,json,md,html,yml}": ["prettier --write"],
};
