'use strict';

angular.module('undefinedAngularApp')
  .controller('UserCtrl', function ($scope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Yeoman'
    ];
    $scope.id = $routeParams.id;
  });
