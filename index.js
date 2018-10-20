//Code goes here
// var app=angular.module('MyApp', []);
(function() {

    var app = angular.module('app', ['ui.router','ui-notification', 'ui.bootstrap']);
    app.constant('_', window._)
        // use in views, ng-repeat="x in _.range(3)"
        .run(function($rootScope) {
            $rootScope._ = window._;
        });
    // app.provider('$uibModal', function() {
    //     var $modalProvider = {
    //         options: {
    //             animation: true,
    //             backdrop: true, //can also be false or 'static'
    //             keyboard: true
    //         }
    //     }
    // });
    app.config(config);

    function config($stateProvider) {
        // var helloState = {
        //   name: 'home',
        //   url: '/home',
        //   template: '<h3>hello world!</h3>'
        // }

        // var aboutState = {
        //   name: 'about',
        //   url: '/about',
        //   template: '<h3>Its the UI-Router hello world app!</h3>'
        // }

        $stateProvider.state({
            name: 'home',
            url: '/home',
            templateUrl: 'entryBook.tpl.html',
            controller: 'EntryBookCtrl'
        })
        .state({
            name: 'view',
            url: '/view',
            templateUrl: 'viewBook.tpl.html',
            controller: 'ViewBookCtrl'
        })
        .state({
            name: 'issue',
            url: '/issue',
            templateUrl: 'issueBook.tpl.html',
            controller: 'IssueBookCtrl'
        })
        .state({
            name: 'return',
            url: '/return',
            templateUrl: 'returnBook.tpl.html',
            controller: 'ReturnBookCtrl'
        })
        .state({
            name: 'popUp',
            url: '/popUp/:item',
            templateUrl: 'popUp.tpl.html',
            controller: 'PopUpCtrl'
        });
        // .state('offlineContent.videoDetails', {
        //   url: '/po/:videoId',
        //   views: {
        //     '@': {
        //       templateUrl: 'contentDetails/showVideoDetails.tpl.html',
        //       controller: 'ShowVideoDetailsCtrl as vm'
        //     }
        //   };
    };







    app.factory('storageService', storageService);

    function storageService($window, $q) {
        var service = {
            setItem: setItem,
            getItem: getItem
        }
        return service;

        function setItem(item) {
            console.log(item)
            $window.localStorage.setItem('user', JSON.stringify(item));
            // sessionStorage.setItem({rootElement:item});
            var user = JSON.parse($window.localStorage.getItem('user'));
            console.log(user)

            return $q.when(user);
            // console.log()
            // console.log($window.sessionStorage.item)
            // return $q.when((sessionStorage.getItem(rootElement)));
        }

        function getItem() {
            // body...
            var user = JSON.parse($window.localStorage.getItem('user'))
            return $q.when(user);
        }
    }
    app.controller('mainController', mainController);

    function mainController($scope, $rootScope, $window, storageService, $q) {
        $scope.ui = {};
        // $rootScope.item='';
        // activate();

        // if($rootScope.setItem==undefined){
        //     $rootScope.setItem="hello"
        // }else{
        //     console.log(setItem)
        // }
        activate();

        function activate() {

            var itemStorage = storageService.getItem();
            console.log(itemStorage)

            // console.log($window.localStorage.setItem)
            // if(($rootScope.itemData)!=undefined)
            //     $rootScope.itemData="hello";
            // }else{
            //     console.log($rootScope.itemData)
            // // }
            // if($window.localStorage.setItem!==''&& $window.localStorage.setItem!==undefined){
            //     console.log("localstorage")
            //     setItem("hello")
            //     console.log(getItem())
            // }else{
            //     console.log('hell9o')
            //     console.log(getItem());
            // }
            // setItem();
        }

        function setItem(val) {
            $window.sessionStorage.item = val;
        }

        function getItem() {
            return $window.sessionStorage.item;
        }
        $scope.save = function() {
                // console.log($rootScope.item)

                $rootScope.item = $scope.ui;
                return storageService.setItem($scope.ui).then((result) => {
                    console.log(result)
                    return $q.when([]);
                })
            }
            // $scope.dateYear='';
            // $scope.dateAge='';
            // $rootScope.displayData=[]
            // $scope.today=parseInt((new Date()).getFullYear());
            // $scope.todayDate=new Date();
            // $scope.selectOption={"1":"Bihar","2":"Bangalore"};
            // $scope.thOption=["Name","Mobile","Type","Email","Desc","State","Date","age"];
            // $scope.showForm=false;
            //   $scope.save=function(){
            //     $scope.showForm=true;
            //     // Scope.dateAge=(($scope.today) - ($scope.ui.date))
            //     $scope.dateYear= parseInt(($scope.ui.date).getFullYear());
            //     $scope.getAge= Date.now() - ($scope.ui.date).getTime();
            //     $scope.ui.age= ($scope.today) - ($scope.dateYear);
            //     $scope.ageDate = new Date($scope.getAge); 
            //     // $scope.ageNew= calculateAge($scope.ui.date);

        //     ($rootScope.displayData).push($scope.ui);
        //     $window.sessionStorage.displayData2=$rootScope.displayData;
        //     // ($rootScope.)
        //     $scope.ui={};
        //   }
        // $scope.$on('$destroy', function() {
        //     $rootScope.item=$scope.ui;
        //   })

    }

})();