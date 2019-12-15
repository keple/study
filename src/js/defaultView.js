var defaultView = angular.module('defaultView',[]);

defaultView.controller('defaultViewController',function(defaultViewService,$scope){

    this.data = defaultViewService.getData();
});

defaultView.service('defaultViewService',function($http){

    this.getData = function(){
        return {
            title:'세팅등록현황',
            data:[]
        }
    }
})