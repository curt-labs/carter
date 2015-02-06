define(['angular'], function (angular) {
    'use strict';

    /**
   * @ngdoc function
   * @name carterApp.controller:LookupCtrl
   * @description
   * # LookupCtrl
   * Controller of the carterApp
   */
    angular.module('carter.controllers.LookupCtrl', ['ngStorage'])
        .controller('LookupCtrl', function ($scope, Vehicle, $location, $localStorage, API) {
            $scope.vehicle = {
                base: {
                    year:0,
                    make:'',
                    model:''
                },
                submodel: '',
                configurations: []
            };
            $scope.$storage = $localStorage.$default({});
            if($scope.$storage.vehicle){
                $scope.defined_vehicle = $scope.$storage.vehicle;
            }

            $scope.years = [];
            $scope.makes = [];
            $scope.models = [];
            $scope.submodels = [];
            $scope.configurations = [];

            $scope.$watchCollection('vehicle.base',function(){
                if($scope.year === undefined || $scope.year === 0){
                    Vehicle.save({'key':API.key},$scope.vehicle).$promise.then(function(data){
                        if(data.available_years !== undefined){
                            $scope.years = [];
                            $scope.makes = [];
                            $scope.models = [];
                            $scope.submodels = [];
                            $scope.configurations = [];
                            angular.forEach(data.available_years,function(y){
                                if($scope.vehicle.base.year !== undefined && $scope.vehicle.base.year === y){
                                    $scope.years.push({value: y, selected:true});
                                }else{
                                    $scope.years.push({value: y, selected:false});
                                }
                            });
                        }else if(data.available_makes !== undefined){
                            $scope.makes = [];
                            $scope.models = [];
                            $scope.submodels = [];
                            $scope.configurations = [];
                            angular.forEach(data.available_makes,function(make){
                                if($scope.vehicle.base.make !== undefined && $scope.vehicle.base.make === make){
                                    $scope.makes.push({value: make, selected:true});
                                }else{
                                    $scope.makes.push({value: make, selected:false});
                                }
                            });
                        }else if(data.available_models !== undefined){
                            $scope.models = [];
                            $scope.submodels = [];
                            $scope.configurations = [];
                            angular.forEach(data.available_models,function(model){
                                if($scope.vehicle.base.model !== undefined && $scope.vehicle.base.model === model){
                                    $scope.models.push({value: model, selected:true});
                                }else{
                                    $scope.models.push({value: model, selected:false});
                                }
                            });
                        }else if(data.available_submodels !== undefined){
                            $scope.submodels = [];
                            $scope.configurations = [];
                            angular.forEach(data.available_submodels,function(submodel){
                                if($scope.vehicle.submodel !== undefined && $scope.vehicle.submodel === submodel){
                                    $scope.submodels.push({value: submodel, selected:true});
                                }else{
                                    $scope.submodels.push({value: submodel, selected:false});
                                }
                            });
                        }
                    });
                    return;
                }
            });
            $scope.$watchCollection('vehicle',function(){
                Vehicle.save({'key':API.key},$scope.vehicle).$promise.then(function(data){
                    if(data.available_configurations !== undefined){
                        $scope.configurations = [];
                        angular.forEach(data.available_configurations,function(config){
                            var opts = [];
                            for (var j = 0; j < config.options.length; j++) {
                                var co = {
                                    value: config.options[j],
                                    key: config.type,
                                    selected: false
                                };
                                for (var i = 0; i < $scope.vehicle.configurations.length; i++) {
                                    var vc = $scope.vehicle.configurations[i];
                                    if(vc.type === config.type && vc.value === co.value){
                                        co.selected = true;
                                    }
                                }
                                opts.push(co);
                            }
                            config.options = opts;
                            $scope.configurations.push(config);
                        });
                    }
                });
            });
            $scope.$watchCollection('vehicle.configurations',function(){
                if($scope.configurations === undefined || $scope.vehicle.configurations === undefined){
                    return;
                }
                if($scope.configurations.length === 0){
                    return;
                }
                if($scope.configurations.length !== $scope.vehicle.configurations.length){
                    return;
                }
                for (var i = 0; i < $scope.vehicle.configurations.length; i++) {
                    var c = $scope.vehicle.configurations[i];
                    if(c.value === undefined || c.value === ''){
                        return;
                    }
                    $scope.vehicle.configurations[i].key = $scope.configurations[i].type;
                }
            });

            $scope.canQueryVehicle = function(){
                if($scope.vehicle.base.model === ''){
                    return true;
                }
                if($scope.submodels.length > 0 && $scope.vehicle.submodel === ''){
                    return true;
                }
                if($scope.configurations.length > 0 && $scope.vehicle.configurations.length !== $scope.configurations.length){
                    return true;
                }
                return false;
            };
            $scope.queryVehicle = function(){
                $scope.$storage.vehicle = $scope.vehicle;

                $location.path($scope.generateVehicleLink($scope.vehicle));
                $location.replace();
            };

            $scope.generateVehicleLink = function(v){
                var vPath = '/vehicle/'+ v.base.year;
                vPath += '/'+ encodeURIComponent(v.base.make);
                vPath += '/'+ encodeURIComponent(v.base.model);
                if(v.submodel !== ''){
                    vPath += '/'+ encodeURIComponent(v.submodel);
                    if(v.configurations.length > 0){
                        for (var i = 0; i < v.configurations.length; i++) {
                            var c = v.configurations[i];
                            vPath += '/'+ encodeURIComponent(c.value);
                        }
                    }
                }
                return vPath;
            };

    });
});
