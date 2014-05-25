'use strict';

angular.module('undefinedAngularApp')
  .service('Model', function Model( $http ) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.loadList = function( $callback ) {
    	$http.get( 'https://public.opencpu.org/ocpu/library/' )
    		.success( function( $data ) {
    			var data = $data.split( '\n' );
    			$callback.call( null, data );
    		} )
    		.error( function( $error ) {
    			console.error( $error );
    		} );
    }
  });
