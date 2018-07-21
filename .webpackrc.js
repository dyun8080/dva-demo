/**
 * 在默认的webpack配置上进行拓展
 * See https://github.com/sorrycc/roadhog
 * 
 * ? ✔️ antd组件样式按需加载
 * ? ✔️ 自定义主题色
 * ? ✔️ 自定义html模板文件
 * 
 * 开发环境 development
 * ? ✔️ 热启动
 * 
 * 生产环境 production
 * ? ✔️ 静态文件hash处理
*/

export default {
  // babel 配置文件
  extraBabelPlugins: [
    [
      // antd组件样式按需加载
      "import", {
        libraryName: "antd",
        libraryDirectory: "es",
        // style："css" or true
        // true时候加载less文件
        style: true
      }
    ]
  ],
  // https://github.com/sorrycc/roadhog#extraresolveextensions
  extraResolveExtensions: ['jsx'],
  // 配置主题色，其实是修改less变量，所以需要开启babel-plugin-import设置style：true 
  theme: {
    "@primary-color": "#1DA57A"
  },
  html: {
    template: './src/index.ejs',
  },
  // 不同环境单独配置 'development' or 'production'
  env: {
    development: {
      extraBabelPlugins: ["dva-hmr"],
    },
    production: {
      hash: true,
    }
  },
}
