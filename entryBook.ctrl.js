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
                console.log(result);
                Notification.success('Successfully Book Created !');
                $state.go($state.current, {}, { reload: true })
                return $q.when([]);
            });
        }

        // $scope.bookTypeChange = function(item) {
        //     console.log(item);
        //     console.log($scope.bookView)
        //     $scope.bookDetails = ($scope.bookView).filter(findItem);

        //     function findItem(obj) {
        //         if (obj.bookType == item && obj.status !== 'Issued') {
        //             return obj;
        //         }
        //     }
        //     $scope.hideDetails = true;
        //     console.log($scope.bookDetails)

        // }
        // $scope.bookChanged = function(item) {
        //     console.log(item);
        //     $scope.showDetailsBook = true;
        //     $scope.selectedBook = item;
        //     $scope.isssueDetails.authorName = item.authorName;
        //     $scope.isssueDetails.publisherName = item.publisherName;
        // }



        // $scope.issueSave = function(object) {
        //     console.log($scope.bookView);
        //     console.log(object);
        //     ($scope.bookView).filter(findItem);

        //     function findItem(obj) {
        //         if (obj.bookName == object.bookName.bookName && (obj.issuedBook !== obj.bookTotalNumber)) {
        //             if (obj.status == 'Issued') {
        //                 console.log("Can't be issued");
        //                 return;
        //             } else {

        //                 (obj.student).push(object.studentName);
        //                 (obj.fromDate).push(object.fromDate);
        //                 (obj.toDate).push(object.toDate);
        //                 if (obj.issuedBook == (obj.bookTotalNumber - 1)) {
        //                     obj.status = "Issued";
        //                 }
        //                 obj.issuedBook = obj.issuedBook + 1;
        //                 return obj;
        //             }
        //         }
        //     }
        //     return storageService.setItem($scope.bookView).then((result) => {
        //         console.log(result)
        //         $state.go($state.current, {}, { reload: true })
        //         return $q.when([]);
        //     });
        //     console.log($scope.bookView);
        // }


        $scope.returnSave = function(objectNew) {
            console.log(objectNew);
            console.log($scope.bookView);
            // objectNew.returnDate = new Date();
            // ($scope.bookView).filter(findItem);
            // function findItem(obj){
            //  if(obj.bookType==objectNew.bookType && obj.bookName==objectNew.bookName.bookName){

            //      return obj;
            //  }
            // }
        }


        $scope.bookReturnType = function(item) {
            $scope.hideReturnDetails = true;
            console.log(item)
            $scope.returnBookDetails = ($scope.bookView).filter(findItem);

            function findItem(obj) {
                if (obj.bookType == item) {
                    return obj;
                }
            }
            // $scope.hideDetails=true;
            console.log($scope.returnBookDetails)
        }

        $scope.bookChangedList = function(obj) {
            console.log(obj)
            $scope.studentDetailsHide = true;
            $scope.studentList.name = obj.student;
            $scope.studentList.fromDate = obj.fromDate;
            $scope.studentList.toDate = obj.toDate;
            console.log($scope.studentList)
        }

        $scope.selectStudentList = function(obj) {
                console.log(obj);

            }
            // var dateNew= moment().format('D-MM-YYYY');
            // var newDate= moment().subtract('10-10-2018').format('D-MM-YYYY')
            // console.log(dateNew);
            // console.log(newDate);
            // var dateB = moment('2010-10-12');
            // var dateC = moment('2014-12-11');

        // console.log(dateB.from(dateC));


    }
})();