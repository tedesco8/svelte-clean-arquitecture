const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sveltePreprocess = require("svelte-preprocess")
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: {
    "build/bundle": ["./src/main.js"],
  },
  resolve: {
    alias: {
      svelte: path.dirname(require.resolve("svelte/package.json")),
    },
    extensions: [".mjs", ".js", ".svelte", ".ts"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: path.join(__dirname, "/public"),
    filename: "[name].js",
    chunkFilename: "[name].[id].js",
    publicPath: "auto",
  },
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.(html|svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            compilerOptions: {
              dev: !prod,
            },
            emitCss: prod,
            hotReload: !prod,
			preprocess: sveltePreprocess({})
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  mode,
  plugins: [
    new ModuleFederationPlugin({
      name: "footer",
      filename: "remoteEntry.js",
      exposes: {
        "./navigationModule":
          "./src/infrastructure/components/layout/Navigation.svelte",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devtool: prod ? false : "source-map",
  devServer: {
    hot: true,
  },
};	
