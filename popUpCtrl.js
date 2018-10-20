(function() {
    'use strict';

    angular
        .module('app')
        .controller('PopUpCtrl', PopUpCtrl);

    function PopUpCtrl($stateParams, $modalInstance, itemDetails,$scope) {
        console.log($stateParams.item);
        console.log(itemDetails);
        $scope.viewBookTh = ["Book Name", "Book Type", "Author", "Page#", "Publisher", "Published On", "Status", "Copy", "Available Copy", "Issued Copy"];

    }
})();