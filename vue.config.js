const { defineConfig } = require("@vue/cli-service");
const CopyModulesPlugin = require("copy-modules-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 3,
            },
          },
        };
      });
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new CopyModulesPlugin({
          destination: "webpack_modules",
        })
      );
    }
    config.plugins.push(new MiniCssExtractPlugin());
    config.module.rules.push({
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
