(function() {
    'use strict';

    angular
        .module('app')
        .controller('IssueBookCtrl', IssueBookCtrl);

    function IssueBookCtrl($scope, storageService, $state, $q, Notification) {
        console.log("book issue");

        $scope.isssueDetails = {};
        $scope.hideDetails = false;
        $scope.bookType = ['Programming', 'Comedy', 'Entertainment', 'Magazine'];
        $scope.viewBookTh = ["Book Name", "Book Type", "Author", "Page#", "Publisher", "Published On", "Status", "Copy", "Available Copy", "Issued Copy"];


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

        $scope.bookTypeChange = function(item) {
            console.log(item);
            console.log($scope.bookView)
            $scope.bookDetails = ($scope.bookView).filter(findItem);

            function findItem(obj) {
                if (obj.bookType == item && obj.status !== 'Issued') {
                    return obj;
                }
            }
            $scope.hideDetails = true;
            console.log($scope.bookDetails)

        }

        $scope.bookChanged = function(item) {
            console.log(item);
            $scope.showDetailsBook = true;
            $scope.selectedBook = item;
            $scope.isssueDetails.authorName = item.authorName;
            $scope.isssueDetails.publisherName = item.publisherName;
        }

        // issue book
        $scope.issueSave = function(object) {
            console.log($scope.bookView);
            console.log(object);
            ($scope.bookView).filter(findItem);

            function findItem(obj) {
                var studentDetails = {
                    studentName: object.studentName,
                    fromDate: object.fromDate,
                    toDate: object.toDate,
                    returnStatus: true
                }
                if (obj.bookName == object.bookName.bookName && (obj.issuedBook !== obj.bookTotalNumber)) {
                    if (obj.status == 'Issued') {
                        console.log("Can't be issued");
                        return;
                    } else {
                        (obj.details).push(studentDetails);
                        (obj.student).push(object.studentName);
                        (obj.fromDate).push(object.fromDate);
                        (obj.toDate).push(object.toDate);
                        if (obj.issuedBook == (obj.bookTotalNumber - 1)) {
                            obj.status = "Issued";
                        }
                        obj.issuedBook = obj.issuedBook + 1;
                        return obj;
                    }
                }
            }
            return storageService.setItem($scope.bookView).then((result) => {
                console.log(result);
                Notification.success('Successfully Issued Book !');
                $state.go($state.current, {}, { reload: true })
                return $q.when([]);
            });
        }

    }
})();