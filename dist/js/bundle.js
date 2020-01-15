/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

var app = angular.module('app', ['navigation', 'contents', 'menu', 'defaultView', 'settingView']);
var nav = angular.module('navigation', []);
nav.controller('navControll', function (navService) {
  this.test = 'tests';
  this.topMenus = [{
    iconClass: 'fa fa-server fa-2x',
    name: 'Service'
  }, {
    iconClass: 'fa fa-address-book fa-2x',
    name: 'Projects'
  }, {
    iconClass: 'fa fa-bandcamp fa-2x',
    name: 'Test'
  }];

  this.goTo = function () {};
});
nav.service('navService', function ($http) {});
var contents = angular.module('contents', ['ngRoute']);
contents.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: '/src/html/tpl/default.html'
  }).when('/setting', {
    templateUrl: '/src/html/tpl/setting.html'
  }).when('/moniter', {
    templateUrl: '/src/html/tpl/moniter.html'
  }).otherwise({
    redirectTo: '/'
  });
});
contents.controller('contentsCtrl', function ($scope) {});
contents.service('contentsServ', function () {});
var menu = angular.module('menu', ['ui.router']);
menu.config(function ($stateProvider) {
  $stateProvider.state('/', {
    url: '/',
    templateUrl: '/src/html/tpl/default.html',
    controller: 'contentsCtrl'
  }).state('/setting', {
    url: '/setting',
    templateUrl: '/src/html/tpl/setting.html',
    controller: 'contentsCtrl'
  }).state('/moniter', {
    url: '/moniter',
    templateUrl: '/src/html/tpl/moniter.html',
    controller: 'contentsCtrl'
  });
});
menu.controller('menuCtrl', function ($state) {
  this.menuList = [{
    iconClass: 'fa fa-home fa-2x',
    name: 'Summary',
    tab: '/'
  }, {
    iconClass: 'fa fa-cogs fa-2x',
    name: 'Setting',
    tab: '/setting'
  }, {
    iconClass: 'fa fa-television fa-2x',
    name: 'Moniter',
    tab: '/moniter'
  }];
  this.actives = [];

  this.movePage = function (tab) {
    console.log("in?", tab);

    switch (tab) {
      case 0:
        $state.go(this.menuList[0].tab);
        console.log("in?", this.menuList[0].tab);
        break;

      case 1:
        $state.go(this.menuList[1].tab);
        break;

      case 2:
        $state.go(this.menuList[2].tab);
        break;

      default:
        $state.go('#/');
        break;
    }
  };
});
menu.service('menuService', function () {});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map