define(['angular'], function (angular) {
	'use strict';

	/**
	 * @ngdoc function
	 * @name carter.controller:VehicleCtrl
	 * @description
	 * # VehicleCtrl
	 * Controller of the carter
	 */
	angular.module('carter.controllers.VehicleCtrl', [])
		.controller('VehicleCtrl', function ($scope, $stateParams, Vehicle) {

			var bindFromParams = function(){
				Vehicle.save({'key':'9300f7bc-2ca6-11e4-8758-42010af0fd79'},$scope.vehicle).$promise.then(function(data){
					var selections = [];
					if($stateParams.config !== undefined){
						var configs = $stateParams.config.split('/');
						for (var i = 0; i < configs.length; i++) {
							selections.push(decodeURIComponent(configs[i]));
						}
					}

					if(data.available_configurations !== undefined && selections.length > 0 && data.available_configurations.length > 0){
						for (var k = 0; k < data.available_configurations.length; k++) {
							var conf = data.available_configurations[k];
							for (var j = 0; j < conf.options.length; j++) {
								var opt = conf.options[j];
								if(selections.indexOf(opt) === -1){
									continue;
								}
								$scope.vehicle.configurations.push({key: conf.type, value: opt});
								break;
							}
						}
					}

					if($scope.vehicle.configurations !== undefined && $scope.vehicle.configurations.length > 0){
						Vehicle.save({'key':'9300f7bc-2ca6-11e4-8758-42010af0fd79'},$scope.vehicle).$promise.then(function(data){
							$scope.parts = data.parts;
						});
					}else{
						$scope.parts = data.parts;
					}
				});
			};

			$scope.vehicle = {
				base:{
					year: $stateParams.year,
					make: decodeURIComponent($stateParams.make),
					model: decodeURIComponent($stateParams.model)
				},
				submodel: decodeURIComponent($stateParams.submodel) || '',
				configurations: []
			};
			$scope.parts = [];

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


			bindFromParams();

		});
});
