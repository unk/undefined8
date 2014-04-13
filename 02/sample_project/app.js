var http = require( 'http' );
var path = require( 'path' );
var express = require( 'express' );
var app = express();
var uuid = require( 'node-uuid' );
var _ = require( 'underscore' );

// DB
var databaseUrl = "undefined0802";
var collections = [ 'users' ];
var db = require( "mongojs" ).connect( databaseUrl, collections );

// all environments
app.set( 'port', process.env.PORT || 3000 );
app.set( 'views', path.join( __dirname, 'views' ) );
//app.use(express.favicon());
app.use( express.logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded() );
app.use( express.methodOverride() );
app.use( express.cookieParser( 'your secret here' ) );
app.use( express.session() );
app.use( app.router );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.engine( 'html', require( 'ejs' ).renderFile );

app.get( '/', function( $request, $response ) {
	//$response.send( 'Hello!' );
	db.users.find( {}, function( $error, $data ) {
		$response.render( 'main.html', { list : $data } );
	} );
} );

app.get( '/todos', function( $req, $res ) {
	db.users.find( {}, function( $error, $data ) {
		$res.send( $data );
	} );
} );

app.put( '/', function( $request, $response ) {
	$request.body.id = uuid.v1();
	db.users.insert( $request.body );
	$response.send( 'put complete' );
} );

app.delete( '/:id', function( $request, $response ) {
	db.users.remove( { id: $request.param( 'id' ) }, function() {
		$response.send( $request.param( 'id' ) ); // param( 'id' )
	} );
} );

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});