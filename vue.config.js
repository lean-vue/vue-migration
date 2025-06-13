const { defineConfig } = require("@vue/cli-service");
const CopyModulesPlugin = require("copy-modules-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (cfg) => {
    if (process.env.NODE_ENV === "production") {
      cfg.plugins.push(
        new CopyModulesPlugin({
          destination: "webpack_modules",
        })
      );
    }
  },
});
