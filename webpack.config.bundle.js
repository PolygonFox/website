const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/bundle.js',

  output: {
    path: path.resolve(__dirname, "bundle"),
    filename: 'bundle.js',
    publicPath: '/',
    library: 'BundleLib',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env"
            ],
            plugins: [
            ]
          }
				},
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use : [
            "css-loader",
            "sass-loader"
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    // Optimize CSS
    new ExtractTextPlugin('styles.min.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true
    }),
    new webpack.ProvidePlugin({
       $: 'jquery',
       jQuery: 'jquery'
    })
  ]
}