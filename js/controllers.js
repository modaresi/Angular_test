var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/view2',
        {
            controller: 'myController',
            templateUrl: '../view2.html'
        });
        //.otherwise({ redirectTo: '' });
});


myApp.factory("fact",function(){
    var factory={};
    factory.getData=function(){
        return {
            list:[
                {user : 'mehran', pass : '123'},
                {user : 'masoud', pass : '123'},
                {user : 'majid', pass : '123'}
         ]
        }
    };
   return factory;
});

//function SimpleController($scope) {
//    $scope.customers = [
//        { name: 'Dave Jones', city: 'Phoenix' },
//        { name: 'Jamie Riley', city: 'Atlanta' },
//        { name: 'Heedy Wahlin', city: 'Chandler' },
//        { name: 'Thomas Winter', city: 'Seattle' }
//    ];
//
//    $scope.addCustomer = function () {
//        $scope.customers.push({ name: $scope.inputData.name, city: $scope.inputData.city });
//    };


myApp.controller('myController',function myController($scope,fact){

    $scope.person= fact.getData().list;
    //console.log($scope.person);

    $scope.userData = '';
    $scope.passData= '';
    $scope.addUser = function () {
        $scope.person.push({user: $scope.userData, pass: $scope.passData});

    };
    });


