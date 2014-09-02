var myApp = angular.module('myApp', [
  'myApp.controllers',
  'ui.router',
]);

myApp.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  'use strict';
  
  $stateProvider
  .state('input', {
    url: '/input',
    templateUrl : 'app/input/input.tpl.html',
    controller: 'InputController'
   
  })
  .state('upgrade', {
    url: '/upgrade',
    templateUrl : 'app/upgrade/upgrade.tpl.html',
    controller: 'UpgradeController'

  });

  $urlRouterProvider.otherwise('/input');
}]);

angular.module('myApp.controllers',[]);

