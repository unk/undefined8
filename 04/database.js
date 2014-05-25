////////////////////////////////////////////////////////////////////////////////
//
//  Copyright 2005-2014 The GrotesQ
//  All Rights Reserved.
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Author: Kim Naram a.k.a. Unknown (unknown@grotesq.com)
 * Date: 2014. 5. 11.
 * Time: 오후 9:25
 */

var database;

( function() {
	var _scope;
	var _db;
	var _isReady = false;
	database = ({
		initialize: function() {
			if( !database ) {
				_scope = this;
				_db = window.openDatabase( 'test_db', '1.0', 'Test Database', 2*1024*1024 );
			}
			else {
				console.log( 'Database is already initialized.' );
			}
		},
		addTodo: function( $id, $todo, $create_date ) {
			//
		}
	} ).initialize();
} )();
