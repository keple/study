require('angular');
require('angular-route');
require('angular-ui-router');
require('../js/service/defaultViewService.js');
require('../js/service/settingViewService.js');
var angular = window.angular;
console.log(angular);

var app = angular.module('app',['navigation','contents','menu','defaultView','settingView'])

var nav = angular.module('navigation',[]);
nav.controller('navControll',function(navService){
    this.test = 'tests';
    this.topMenus=[
        {
            iconClass:'fa fa-server fa-2x',
            name:'Service'
        },
        {
            iconClass:'fa fa-address-book fa-2x',
            name:'Projects'
        },
        {
            iconClass:'fa fa-bandcamp fa-2x',
            name:'Test'
        }
    ]
    this.goTo = function(){

    }
});

nav.service('navService',function($http){
   var test="test1";

});

var contents = angular.module('contents',['ngRoute']);

contents.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'/src/html/tpl/default.html'
    })
    .when('/setting',{
        templateUrl:'/src/html/tpl/setting.html'
    })
    .when('/moniter',{
        templateUrl:'/src/html/tpl/moniter.html'
    })
    .otherwise({redirectTo:'/'})
});
contents.controller('contentsCtrl',function($scope){

  
});
contents.service('contentsServ',function(){

});

var menu = angular.module('menu',['ui.router']);
menu.config(function($stateProvider){
    $stateProvider.state('/',{
        url:'/',
        templateUrl:'/src/html/tpl/default.html',
        controller:'contentsCtrl'
    })
    .state('/setting',{
        url:'/setting',
        templateUrl:'/src/html/tpl/setting.html',
        controller:'contentsCtrl'
    })
    .state('/moniter',{
        url:'/moniter',
        templateUrl:'/src/html/tpl/moniter.html',
        controller:'contentsCtrl'
    })

}).controller('menuCtrl',function($scope,$state){
   
    this.menuList = [{
            iconClass:'fa fa-home fa-2x',
            name:'Summary',
            tab:'/'
        },
        {
            iconClass:'fa fa-cogs fa-2x',
            name:'Setting',
            tab:'/setting'
        },
        {
            iconClass:'fa fa-television fa-2x',
            name:'Moniter122113',
            tab:'/moniter'
        }
    ]
    this.actives = [];

    this.movePage = function(tab){
        console.log("in?",tab);
        switch(tab){
            case 0 : $state.go(this.menuList[0].tab);
                console.log("in?",this.menuList[0].tab);
                break;
            case 1 : $state.go(this.menuList[1].tab);
                break;
            case 2 : $state.go(this.menuList[2].tab);
                break;
            default:$state.go('#/');
                break;
        }
    }
}).run()

menu.service('menuService',function(){

});

if(module.hot){
    console.log("in???");
    console.log("hotReplace");
    module.hot.accept();
    console.log("modify");
    
}

module.exports = {
    app : app,
    nav : nav,
    contents : contents,
    menu : menu
}

