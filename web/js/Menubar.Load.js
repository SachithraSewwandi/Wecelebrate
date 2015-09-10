/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Load = function ( editor ) {

	//var signals = editor.signals;

	var container = new UI.Panel();
	container.setClass( 'menu' );

	//var isPlaying = false;

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'Load' );


	var fileInput = document.createElement( 'input' );
	fileInput.type = 'file';
	fileInput.addEventListener( 'change', function ( event ) {

		editor.loader.loadFile( fileInput.files[ 0 ] );

	} );

	//var option = new UI.Panel();
	//option.setClass( 'option' );
	//option.setTextContent( 'Import' );
	title.onClick( function () {

		fileInput.click();

	} );
	container.add( title );


	

	return container;

};
