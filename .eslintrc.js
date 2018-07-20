module.exports = {
  // parser: "babel-eslint",
  extends: "airbnb",
  env: {
    // 指定浏览器环境，允许window对象
    browser: true,
    // jest环境，node环境的拓展：it...
    jest: true
  },
  rules: {
    "jsx-a11y/href-no-hash": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["Link"],
      "specialLink": ["to"]
    }],
    "generator-star-spacing": [0],
    "consistent-return": [0],
    "react/react-in-jsx-scope": [0],
    "react/forbid-prop-types": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js", "jsx"] }],
    "global-require": [1],
    "import/prefer-default-export": [0],
    "react/jsx-no-bind": [0],
    "react/prop-types": [0],
    "react/prefer-stateless-function": [0],
    "no-else-return": [0],
    "no-restricted-syntax": [0],
    "import/no-extraneous-dependencies": [0],
    "no-use-before-define": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "no-nested-ternary": [0],
    "arrow-body-style": [0],
    "import/extensions": [0],
    "no-bitwise": [0],
    "no-cond-assign": [0],
    "import/no-unresolved": [0],
    "require-yield": [1],
    "no-param-reassign": [0],
    "no-shadow": [0],
    "no-underscore-dangle": [0],

    // 使用空格开始所有注释，以便于阅读
    // https://github.com/airbnb/javascript#comments--spaces
    // "spaced-comment": [0],

    // 使用2个空格来缩进
    // https://github.com/airbnb/javascript#whitespace--spaces
    // "indent": [0],

    /** 
     * js表达式中要求使用单引号：Use single quotes '' for strings. eslint
     * bad: const name = "Capt. Janeway"; const name = `Capt. Janeway`;
     * good: const name = 'Capt. Janeway';
     * https://github.com/airbnb/javascript#strings--quotes
     */
    // "quotes": [0],

    "func-names": [0],

    /**
     * 1 如果函数体由返回没有副作用的表达式的单个语句组成，则省略大括号并使用隐式返回。否则，请保留大括号并使用return语句。
     * 2 箭头函数是只有一个参数的时候是否使用（）
     * bad: [1, 2, 3].map((number) => `A string containing the ${number}.`);
     * good: [1, 2, 3].map(number => `A string containing the ${number}.`);
     * https://github.com/airbnb/javascript#arrows--implicit-return
     */
    // "arrow-parens": [0],
    "space-before-function-paren": [0],
    "no-useless-escape": [0],
    "object-curly-newline": [0],
    "function-paren-newline": [0],
    "class-methods-use-this": [0],
    "no-new": [0],
    "import/newline-after-import": [0],
    // 禁止代码中出现console
    // "no-console": [0]
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
}
