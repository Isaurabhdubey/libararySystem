(function() {
    'use strict';

    angular
        .module('app')
        .controller('PopUpCtrl', PopUpCtrl);

    function PopUpCtrl($stateParams, $modalInstance, itemDetails, $scope) {
        // console.log($stateParams.item);
        console.log(itemDetails);
        $scope.item = itemDetails;
        $scope.viewBookTh = ["Student Name", "From Date", "To Date", "Return Date", "Status"];
        $scope.studentDetails = itemDetails.details;
        console.log(($scope.studentDetails).length);
    }
})();