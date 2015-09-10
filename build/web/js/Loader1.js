var Loader1 = function ( editor ) {

	var scope = this;
	var signals = editor.signals;
        


	this.loadFile = function ( fileUrl ) {
            // instantiate a loader 
            var loader = new THREE.JSONLoader(); alert(fileUrl)
            loader.load( fileUrl, 
            function ( geometry, materials ) { 
                var material = new THREE.MeshFaceMaterial( materials ); 
                var object = new THREE.Mesh( geometry, material ); 
                editor.add( object ); } );
        }
}

