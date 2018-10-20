(function(){
	'use strict';

	angular
	.module('app')
	.controller('PopUpCtrl', PopUpCtrl);

	function PopUpCtrl($stateParams){
		console.log($stateParams.item);
	}
})();