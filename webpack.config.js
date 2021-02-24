const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Multi Page Setup
let htmlPages = [
  { name: 'index', title: 'Home'},
  { name: 'example', title: 'Example'}
];
let htmlPlugins = htmlPages.map(page => {
  return new HtmlWebpackPlugin({
    title: page.title,
    template: `./src/${page.name}.html`,
    filename: `${page.name}.html`,
    chunks: [`${page.name}`]
  })
});

module.exports = {
  mode: 'development',
  entry: { 
    // If you don't set this, then it will default to main:
    index: path.resolve(__dirname, "src", "index.js"),
    // print: path.resolve(__dirname, "src", "print.js")
  },
  plugins: [
    ...htmlPlugins
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: "swc-loader" }]
      },
    ]
  }
};
