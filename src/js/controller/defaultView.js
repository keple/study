var mainObject = require('../main.js');

var defaultView = angular.module('defaultView',[]);

defaultView.controller('defaultViewController',function(defaultViewService,$scope){

    this.data = defaultViewService.getData();
});

module.exports = defaultView;
