const path = require("path");
const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "YouTubePlaylist.tsx",
  context: path.resolve(__dirname, "src"),
  output: {
    clean: true,
  },
  plugins: [new VanillaExtractPlugin(), new MiniCssExtractPlugin()],
  module: {
    rule: [
      {
        test: /\.vanilla\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve("css-loader"),
            options: {
              url: false, // Required as image imports should be handled via JS/TS import statements
            },
          },
        ],
      },
    ],
  },
};
