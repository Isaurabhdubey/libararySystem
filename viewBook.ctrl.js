(function() {
    'use strict';

    angular
        .module('app')
        .controller('ViewBookCtrl', ViewBookCtrl);

    function ViewBookCtrl($scope, storageService, $state, $modal) {
        console.log("book Entry");
        $scope.dataItem = {};
        $scope.bookType = ['Programming', 'Comedy', 'Entertainment', 'Magazine'];
        $scope.viewBookTh = ["Book Name", "Book Type", "Author", "Page#", "Publisher", "Published On", "Status", "Copy", "Available Copy", "Issued Copy"];
        $scope.hideDetails = false;

        activate();

        function activate() {
            var itemStorage = storageService.getItem();
            console.log(itemStorage.$$state.value);
            if ((itemStorage.$$state.value) != null) {
                console.log("hii");
                $scope.bookView = itemStorage.$$state.value;
                console.log($scope.bookView)
            } else {
                console.log('set book for issued')
            }
            if ($scope.dataItem != undefined && $scope.dataItem != '') {
                $scope.hideDetails = true;
            }
            // localStorage.clear();
        }

        // $scope.popUpOpen = function() {
        //     var modalInstance = $modal.open({
        //         templateUrl: 'add_modal.html',
        //         scope: $scope
        //     });
        //     console.log('modal opened');
        //     modalInstance.result.then(function() {
        //         console.log($scope.selected);
        //     }, function() {
        //         console.log('Modal dismissed at: ' + new Date());
        //     });
        // };

        $scope.openModal = function(item) {
            var modalInstance = $modal.open({
                templateUrl: 'popUp.html',
                controller: 'PopUpCtrl',
                windowClass: 'app-modal-window'
            });
            modalInstance.result.then(
                //close
                function(result) {
                    var a = result;
                },
                //dismiss
                function(result) {
                    var a = result;
                });
        };

        // $(document).on("click", ".modalData", function() {
        //     $scope.dataItem = $(this).data('item');
        //     console.log($scope.dataItem);
        //     activate();
        //     $(".modal-body #bookName").val($scope.dataItem.bookName);
        //     // $('#addBookDialog').modal('show');
        // });

        // $scope.bookListDetails = function(argument) {
        //     var modalInstance = $modal.open({
        //         templateUrl: 'popUp.tpl.html'
        //     });
        //     console.log('modal opened');
        //     modalInstance.result.then(function() {
        //         console.log($scope.selected);
        //     }, function() {
        //         console.log('Modal dismissed at: ' + new Date());
        //     });
        // body...

        // console.log("argument",argument);
        // $state.go('popUp', {
        //     item : JSON.stringify(argument)
        // });
        // }
    }
})();