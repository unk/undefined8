'use strict';

angular.module('undefinedAngularApp')
  .controller('ContactCtrl', function( $scope, $http, Model ) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Model.loadList( function( $data ) {
    	$scope.list = $data;
    } );

    $scope.list = [ 'Loading' ];
  });
