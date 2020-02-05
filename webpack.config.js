const path = require('path');
const webpack = require('webpack');

module.exports = {
  // enntry file
  entry: {
    main : ['./src/js/main.js','webpack-hot-middleware/client?path=/dist/js/__webpack_hmr']
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
    publicPath : "/dist/js/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        {
          loader : 'ng-hot-reload-loader'
        }]
      }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-source-map',
  target:'web',
  mode: 'development'
};