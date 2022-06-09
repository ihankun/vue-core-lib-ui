const path = require('path');

// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const TerserPlugin = require('terser-webpack-plugin');

// const config = require('./config');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.ts']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/lib/',
    filename: 'index.ts',
    chunkFilename: '[id].js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'KunLib',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  // resolve: {
  //   extensions: ['.js', '.vue', '.json'],
  //   alias: config.alias
  // },
  // externals: {
  //   vue: config.vue
  // },
  // optimization: {
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         output: {
  //           comments: false
  //         }
  //       }
  //     })
  //   ]
  // },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  module: {
    rules: [
      {
        test: [/\.(jsx?|babel|es6)$/, /\.m?js$/],
        include: process.cwd(),
        // exclude: config.jsexclude,
        exclude: [/(node_modules|bower_components)/, path.resolve(__dirname, 'public/graph_hardcoded_config.js')],
        loader: 'babel-loader',
        use: {
          loader: 'babel-loader',
          options: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  },
  plugins: [
    // new ProgressBarPlugin(),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env.VUE_APP_MAGIC_VAL': 'process.env.VUE_APP_MAGIC_VAL',
      'process.env.VUE_APP_AUTH': 'process.env.VUE_APP_AUTH',
      'process.env.VUE_APP_COMMON_API': 'process.env.VUE_APP_COMMON_API',
      'process.env.VUE_APP_SWIPE_API': 'process.env.VUE_APP_SWIPE_API',
      'process.env.VUE_APP_PATIENT_API': 'process.env.VUE_APP_PATIENT_API'
    })
  ]
}
