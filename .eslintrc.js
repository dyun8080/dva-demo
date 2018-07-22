/**
 * 写出最优雅的JavaScript代码 https://github.com/airbnb/javascript
 * 推荐下载VScode插件：Better Comments，更加舒心的注释阅读
 * // [0] 不对规则进行检验
 * [1] warn 提示💡
 * [2] error 警告⚠️
 */

module.exports = {
  parser: "babel-eslint",
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
    "react/forbid-prop-types": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-filename-extension": [1, { "extensions": [".js", "jsx"] }],
    "global-require": [1],
    "import/prefer-default-export": [0],
    "react/jsx-no-bind": [0],
    "react/prop-types": [0],
    "react/prefer-stateless-function": [0],
    "no-restricted-syntax": [0],
    "import/no-extraneous-dependencies": [0],
    "no-use-before-define": [0],
    "jsx-a11y/no-static-element-interactions": [0],
    "no-nested-ternary": [0],
    "arrow-body-style": [0],
    "import/extensions": [0],
    "no-bitwise": [0],
    "no-cond-assign": [0],
    "require-yield": [1],
    "no-param-reassign": [0],
    "no-shadow": [0],
    "no-underscore-dangle": [0],

    /**
     * 如果if块总是执行return语句，则后续的else块是不必要的
      // bad
      function foo() {
        if (x) {
          return x;
        } else {
          return y;
        }
      }
      // ? good
      function foo() {
        if (x) {
          return x;
        }

        return y;
      }
     * https://github.com/airbnb/javascript#blocks--no-else-return
     */
    // // "no-else-return": [0],

    /**
     * 不能在没有import React from 'react'; 的模块中写jsx表达式
     */
    // // "react/react-in-jsx-scope": [0],

    /** 
     * 组件的props中的属性使用之前要先进行解构
     // bad
     * const MyComponent = (props) => {
     *   return (<div id={props.id} />)
     * };
     * 
     // ? good
     * const MyComponent = (props) => {
     *   const { id } = props;
     *   return (<div id={id} />)
     * };
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     */
    // // "react/destructuring-assignment": [0],

    /**
     * 不能导入不存在的模块，类似于ts的检查机制
     * bad: import React from 'reactt';
     * ? good: import React from 'react';
     */
    // // "import/no-unresolved": [0],

    /**
     * 使用空格缩进所有注释，以便于阅读
     * https://github.com/airbnb/javascript#comments--spaces
     */
    // // "spaced-comment": [0],

    /**
     * 使用2个空格来缩进
     * https://github.com/airbnb/javascript#whitespace--spaces
     */
    // // "indent": [0],

    /** 
     * js表达式中要求使用单引号：Use single quotes '' for strings. eslint
     * 也不能出现没有变量的模板字符``
     * bad: const name = "Capt. Janeway"; const name = `Capt. Janeway`;
     * ? good: const name = 'Capt. Janeway';
     * https://github.com/airbnb/javascript#strings--quotes
     */
    // // "quotes": [0],

    /** 
     * 规范函数的写法，确保一致性
     * bad: function a () {}; 
     *      function(){};
     *      
     * ? good: function a() {};
     * ?       function () {};
     * https://github.com/airbnb/javascript#functions--signature-spacing
     */
    // // "space-before-function-paren": [0],

    /**
     * 1 如果函数体由返回没有副作用的表达式的单个语句组成，则省略大括号并使用隐式返回。否则，请保留大括号并使用return语句。
     * 2 箭头函数是只有一个参数的时候是否使用（params）的写法
     * bad: [1, 2, 3].map((number) => `A string containing the ${number}.`);
     * ? good: [1, 2, 3].map(number => `A string containing the ${number}.`);
     * https://github.com/airbnb/javascript#arrows--implicit-return
     */
    // // "arrow-parens": [0],

    "func-names": [0],
    "no-useless-escape": [0],
    "object-curly-newline": [0],
    "function-paren-newline": [0],
    "class-methods-use-this": [0],
    "no-new": [0],

    // 表示import语句与其他代码之间需要存在一个空行
    // // "import/newline-after-import": [0],
    
    // 禁止代码中出现console
    // // "no-console": [0]
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  }
}
