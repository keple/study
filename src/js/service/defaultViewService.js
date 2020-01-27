var defaultView = require('../controller/defaultView.js')

defaultView.service('defaultViewService',function($http){

    this.getData = function(){
        return {
            title:'세팅등록현황',
            data:[]
        }
    }
})