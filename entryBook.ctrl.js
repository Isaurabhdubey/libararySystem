(function() {
    'use strict';

    angular
        .module('app')
        .controller('EntryBookCtrl', EntryBookCtrl);

    function EntryBookCtrl($scope, storageService, $q, $state, _, Notification) {
        $scope.ui = {};
        $scope.isssueDetails = {};
        $scope.returnDetails = {};
        $scope.bookView = [];
        $scope.bookDetails = {};
        $scope.selectedBook = {};
        $scope.studentList = {};
        $scope.studentDetails = [];
        $scope.selectedRow = "";
        $scope.bookType = ['Programming', 'Comedy', 'Entertainment', 'Magazine'];
        $scope.viewBookTh = ["Book Name", "Book Type", "Author", "Page#", "Publisher", "Published On", "Status", "Copy", "Available Copy", "Issued Copy"];
        $scope.hideDetails = false;
        $scope.hideReturnDetails = false;
        $scope.studentDetailsHide = false;

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
            // localStorage.clear();
        }
        // $scope.checkDobDatepickerOpen =function($event) {
        //     $event.preventDefault();
        //     $event.stopPropagation();
        //     $scope.dateofbirthOpened = true;
        //   }

        // save book details


        $scope.success = function() {
            console.log("hhhh");
            Notification.success('Success notification');
        };


        $scope.saveBook = function(obj) {
            console.log(obj);
            obj.status = 'Available';
            obj.details = [];
            obj.student = [];
            obj.fromDate = [];
            obj.toDate = [];
            obj.issuedBook = 0;
            obj.return = [];
            // var arrayData = [obj];
            ($scope.bookView).push(obj);
            return storageService.setItem($scope.bookView).then((result) => {
                console.log(result)
                $state.go($state.current, {}, { reload: true })
                return $q.when([]);
            });
        }

       



       



    }
})();
