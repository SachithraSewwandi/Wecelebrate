/**
 * @author mrdoob / http://mrdoob.com/
 */

var Menubar = function ( editor ) {

	var container = new UI.Panel();
	container.setId( 'menubar' );

	container.add( new Menubar.File( editor ) );

	//container.add( new Menubar.Load( editor ) );
	//container.add( new Menubar.Add( editor ) );
	container.add( new Menubar.Play( editor ) );
	//container.add( new Menubar.Examples( editor ) );
	//container.add( new Menubar.View( editor ) );
	//container.add( new Menubar.Help( editor ) );

	//container.add( new Menubar.Status( editor ) );
        
        var form = new UI.Panel();
	container.add( form );
        var fr = new UI.Input('url');
        
        form.add(fr);

	var buttons = new UI.Panel();
	container.add( buttons );

	// translate / rotate / scale
        
	var Load = new UI.Button( 'Load' );

	Load.onClick( function () {
                var fileUrl=document.getElementById('two').value;
                fileUrl.type='file';
                
                
		//fileInput.click();l
                alert(fileUrl);
                var src1=fileUrl.split(".");
                alert(src1[0]);
                var file1=src1[0]+".json";
                //alert(file1);
                
                $.getJSON(file1, function(data){
                    //console.log(data);
                    alert(data.metadata.type);
                    //alert(data);
                    editor.loader.loadFile( data );
                });
                
                editor.loader.loadFile( file1 );

	} );
	buttons.add( Load );
        
       

	return container;

};
