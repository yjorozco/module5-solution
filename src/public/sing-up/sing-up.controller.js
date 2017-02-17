(function () {
"use strict";
angular.module('public')
.controller('SingUpController', SingUpController);

SingUpController.$inject= ['MenuService'];
function SingUpController(MenuService) {
  var reg = this;

  reg.submit = function () {

  var item=service.getMenuItem(reg.user.item);
  if(item){
      reg.notExits = true;
      reg.completed = true;
      MenuService.saveUser(reg.user);
  }else{

  }

  };
}

})();
