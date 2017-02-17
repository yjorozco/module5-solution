(function () {
"use strict";
angular.module('public')
.controller('SingUpController', SingUpController);

SingUpController.$inject= ['MenuService'];
function SingUpController(MenuService) {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;

      MenuService.saveUser(reg.user);

  };
}

})();
