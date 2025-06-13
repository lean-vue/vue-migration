const { defineConfig } = require("@vue/cli-service");
const CopyModulesPlugin = require("copy-modules-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
    cfg.plugins.push(new MiniCssExtractPlugin());
    cfg.module.rules.push({
      test: /\.font\.js/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            url: false,
          },
        },
        "webfonts-loader",
      ],
    });
  },
});
