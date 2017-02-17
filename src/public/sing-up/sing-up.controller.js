(function () {
"use strict";
angular.module('public')
.controller('SingUpController', SingUpController);

function SingUpController() {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;
  };
}

})();
