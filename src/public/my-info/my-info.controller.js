(function(){

"use strict";

angular.module('public')
.controller('MyInfoController',MyInfoController);


MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService,ApiPath){
	var myinfo = this;
	myinfo.exists = false;
	myinfo.basePath = ApiPath;
	myinfo.user=MenuService.getUser();	
	console.log(MenuService.getUser());
	if(myinfo.user != undefined && Object.keys(myinfo.user).length > 0){	  
        myinfo.exists = true;          
    }else{       
      	myinfo.exists = false;
    }
}

})();