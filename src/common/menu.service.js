(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var user={};
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (item) {
    var item_element={};   
    if (item) {
      return $http.get(ApiPath + '/menu_items.json').then(function (response) {        
      if(response.data.menu_items!=undefined){
        var items=response.data.menu_items;
        for(var i=0;i<items.length;i++){
          if(items[i].short_name.toLowerCase()===item.toLowerCase()){
              item_element=items[i];              
              break;
          }
        }
       }
       return item_element;
      });
    }   
  };

  service.saveUser = function (userLogin) {
      service.user=userLogin;
  };

  service.getUser = function(){
    return service.user;
  }

}



})();
