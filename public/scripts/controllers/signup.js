define(['angular'], function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name carter.controller:SignupCtrl
     * @description
     * # SignupCtrl
     * Controller of the carter
     */
    angular.module('carter.controllers.SignupCtrl', [])
        .controller('SignupCtrl', function ($scope, $mdToast, $location, Customer, Session, API) {
            $scope.errors = [];
            $scope.account = {
                first_name:'',
                last_name:'',
                email:'',
                password:''
            };

            $scope.signup = function(){
                $scope.accountForm.$submitted = true;
                if(!$scope.accountForm.$valid){
                    return;
                }
                // We're going to double check the passwords
                // it was supposed to be checked in form validation,
                // but let's make sure.
                if($scope.account.password !== $scope.accountForm.confirm_password.$viewValue){
                    return;
                }

                var c = {};
                c.first_name = $scope.account.first_name;
                c.last_name = $scope.account.last_name;
                c.email = $scope.account.email;
                c.password = $scope.account.password;
                Customer.create({'shop':API.shop},c).$promise.then(function(data){
                    var tst = $mdToast.simple().content('Account created!').position({bottom:false,top:true,left:false,right:true});
                    $mdToast.show(tst).hideDelay(3000);
                    $scope.customer = data;
                    Session.storeToken($scope.customer.token);
                    $location.path('/account');
                },function(){
                    $scope.errors.push('Failed to create new customer.');
                });
            };
        });
});
