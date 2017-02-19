(function () {
"use strict";
angular.module('public')
.controller('SingUpController', SingUpController);

SingUpController.$inject= ['MenuService'];
function SingUpController(MenuService) {
  var reg = this;
  reg.exists = true;
  reg.submit = function () {    
    MenuService.getMenuItem(reg.user.item).then(function(response){
      reg.user.info_item=response;
      if(reg.user.info_item != undefined && Object.keys(reg.user.info_item).length > 0){
        reg.completed = true;
        reg.exists = true;
        MenuService.saveUser(reg.user);      
      }else{
        reg.exists = false;
        reg.completed = false;
      }
    });

  };
}

})();
