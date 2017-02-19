(function(){

'use strict';

angular.module('public').
component('information',{
	templateUrl: 'src/public/information/information.html',
	controller: InformationController,
	bindings:{
		completed:'<'
	}
});

function InformationController(){
	var $ctrl = this;     
}

})();