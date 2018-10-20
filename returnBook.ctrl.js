(function() {
        'use strict';

        angular
            .module('app')
            .controller('ReturnBookCtrl', ReturnBookCtrl);

        function ReturnBookCtrl($scope, storageService, _, $q, $state) {
            console.log("book return");
            $scope.bookType = ['Programming', 'Comedy', 'Entertainment', 'Magazine'];
            $scope.studentList = {};
            $scope.bookView = {};


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
                $scope.studentList = obj.details;
                $scope.studentList = ($scope.studentList).filter(filterName);

                function filterName(item) {
                    console.log(item.returnStatus)
                    if (item.returnStatus === true) {
                        return obj;
                    }
                }
                console.log($scope.studentList);

            }


            $scope.returnSave = function(item) {
                console.log(item);

                // console.log(JSON.parse(item.studentName));
                var value = JSON.parse(item.studentName);
                

                (item.bookName.details).filter(findItem);

                function findItem(obj) {
                    if (obj.studentName === value.studentName && obj.fromDate == value.fromDate && obj.returnStatus !== false) {
                        obj.returnStatus = false;
                        obj.returnDate = new Date();
                        return obj;
                    }
                }
                console.log(item.bookName)
                console.log($scope.bookView);
                var fetchData= _.forEach($scope.bookView, function(obj){
                	if(obj.bookType== item.bookName.bookType && obj.bookName == item.bookName.bookName){
                		obj = item.bookName;
                		obj.issuedBook= (obj.issuedBook)-1;
                	}
                })
                console.log(fetchData);

                return storageService.setItem(fetchData).then((result) => {
                    console.log(result)
                    $state.go($state.current, {}, { reload: true })
                    return $q.when([]);
                });
                // console.log($scope.bookView);
            }

            // console.log(item.bookName);




        
    }
})();