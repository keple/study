const express = require('express');
const webpack = require('webpack');
const devMiddleWare = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const path = require('path');

const allowed = [
    '.js'
  ];
var app = express();

var compiler = webpack(webpackConfig);
var middleware = devMiddleWare(compiler,{
    publicPath : webpackConfig.output.publicPath,
    hot:true
})
console.log(middleware);
app.use(middleware);

app.use(hotMiddleware(compiler,{
    path: webpackConfig.output.publicPath + "__webpack_hmr"
}))


app.get('*', function(req, res) {       
    console.log(req.url);
    console.log(middleware.fileSystem);
    if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
      res.sendFile(path.resolve(`dist/js/${req.url}`));
   } else {
      res.sendFile(path.join(__dirname, req.url));
   }
});

app.listen(5500,() => { console.log('serv start')});




