export default {
  // babel 配置文件
  extraBabelPlugins: [
    [
      // antd组件按需加载，style为true加载less文件
      "import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
      }
    ]
  ],
  // 配置主题色，其实是修改less变量，所以需要开启babel-plugin-import设置style：true 
  theme: {
    "@primary-color": "#1DA57A"
  },
  hash: true,
  // 不同环境单独配置
  env: {
    development: {
      extraBabelPlugins: ["dva-hmr"]
    }
  },
}
