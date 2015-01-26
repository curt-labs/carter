define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name carter.controller:ProductCtrl
	 * @description
	 * # ProductCtrl
	 * Controller of the carter
	 */
	angular.module('carter.controllers.ProductCtrl', [])
		.controller('ProductCtrl', function ($scope, Product, $stateParams, $location, $sce) {
			if($stateParams === undefined || $stateParams.id === undefined){
				$location.href = '/';
			}
			$scope.part = {};
			$scope.images = [];
			Product.get({'id':$stateParams.id, 'key':'9300f7bc-2ca6-11e4-8758-42010af0fd79'}).$promise.then(function(part){
				$scope.part = part;
				$scope.getImages('Grande');
				$scope.getUPC();
			},function(){
				$location.href = '/';
			});

			$scope.getUPC = function(){
				if($scope.part === undefined || $scope.part.attributes === undefined || $scope.part.attributes === null){
					return '';
				}
				for(var i = 0; i < $scope.part.attributes.length; i++){
					if($scope.part.attributes[i].key === 'UPC'){
						$scope.part.upc = $scope.part.attributes[i].value;
						return;
					}
				}
			};
			$scope.getImages = function(size){
				if($scope.part === undefined || $scope.part.images === undefined || $scope.part.images === null){
					return;
				}
				for(var i = 0; i < $scope.part.images.length; i++){
					if($scope.part.images[i].size === size){
						var path = $scope.part.images[i].path;
						$scope.images.push(path.Scheme + '://'+ path.Host + path.Path);
					}
				}
				return;
			};
			$scope.getInstall = function(part){
				if(part === undefined || part.install_sheet === undefined || part.install_sheet === null){
					return '#';
				}
				return part.install_sheet.Scheme + '://' + part.install_sheet.Host + part.install_sheet.Path;
			};
			$scope.getVideo = function(part){
				if(part === undefined || part.Videos === undefined || part.Videos === null || part.Videos.length === 0){
					return '';
				}

				var video = null;
				for (var i = part.Videos.length - 1; i >= 0; i--) {
					if(part.Videos[i].IsPrimary){
						video = part.Videos[i];
						break;
					}
				}
				if (video === null){
					var idx = Math.floor((Math.random() * (part.Videos.length -1)));
					video = part.Videos[idx];
				}
				return $sce.trustAsHtml('<iframe width="100%" height="200" src="//www.youtube.com/embed/'+video.YouTubeVideoId+'" frameborder="0" allowfullscreen></iframe>');
			};
		});
});
