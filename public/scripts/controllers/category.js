define(['angular'], function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name carterApp.controller:CategoryCtrl
     * @description
     * # CategoryCtrl
     * Controller of the carterApp
     */
    angular.module('carter.controllers.CategoryCtrl', ['carter.services.Category'])
        .controller('CategoryCtrl', function ($scope, $rootScope, Category, $stateParams, $sce, API) {
            $rootScope.crumbs = [{
                path: '/',
                name:'Home'
            }];
            $scope.category = {};
            if($stateParams !== undefined || $stateParams.id !== undefined){
                Category.get({'id': $stateParams.id, 'key':API.key}).$promise.then(function(cat){
                    $scope.category = cat;
                    $rootScope.crumbs.push({path:'/category/'+$scope.category.id, name: $scope.category.title});
                });
            }

            $scope.renderHTML = function(content){
                return $sce.trustAsHtml(content);
            };

            $scope.getCategoryHeaderContent = function(){
                if($scope.category.content === undefined){
                    return '';
                }

                for (var i = 0; i < $scope.category.content.length; i++) {
                    var con = $scope.category.content[i];
                    if(con.contentType.Type.toLowerCase() === 'categorybrief'){
                        return con.text;
                    }
                }
                return '';
            };

            $scope.getPartPrice = function(part){
                if(part.customer !== undefined){
                    return '$'+part.customer.price;
                }else{
                    for (var i = 0; i < part.pricing.length; i++) {
                        var pr = part.pricing[i];
                        if(pr.type.toLowerCase() === 'list'){
                            return '$' + pr.price;
                        }
                    }
                }
                return 'N/A';
            };

            $scope.generatePartImage = function(part){
                if(part.images === undefined){
                    return '://';
                }

                var img = {};
                for (var i = 0; i < part.images.length; i++) {
                    img = part.images[i];
                    if(img.size.toLowerCase() === 'medio' && img.sort === 'a'){
                        return img.path.Scheme +'://'+img.path.Host+img.path.Path;
                    }
                }
                for (i = 0; i < part.images.length; i++) {
                    img = part.images[i];
                    if(img.size.toLowerCase() === 'medio'){
                        return img.path.Scheme +'://'+img.path.Host+img.path.Path;
                    }
                }
                for (i = 0; i < part.images.length; i++) {
                    img = part.images[i];
                    if(img.sort === 'a'){
                        return img.path.Scheme +'://'+img.path.Host+img.path.Path;
                    }
                }

                if(part.images[0] !== undefined){
                    img = part.images[0];
                    return img.path.Scheme +'://'+img.path.Host+img.path.Path;
                }
            };
        });
});
