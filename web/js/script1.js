var one=null;
var fileUrl;

function change_Image(element){
   one= document.images['one'].src;
  // one=element.toString();
   alert(one);
   document.getElementById("two").value=one;
   document.getElementById("box1").innerHTML = "";
   showModel(one);  
}


function showModel(one){
                    
		 // Set up the scene, camera, and renderer as global variables.
		    var container = document.getElementById("box1");
                    document.body.appendChild( container );
		    var scene, camera, renderer;
                    var src1=one.split(".");
                    alert(src1[0]);

		    init();
		    animate();

		    // Sets up the scene.
		    function init() {

		      // Create the scene and set the scene size.
		      scene = new THREE.Scene();
              		var WIDTH = container.offsetWidth,HEIGHT = container.offsetHeight;	
              		//alert(WIDTH);   alert(HEIGHT);   

		      // Create a renderer and add it to the DOM.
		      renderer = new THREE.WebGLRenderer({antialias:true});
		      renderer.setSize(WIDTH, HEIGHT);
		      container.appendChild(renderer.domElement);

		      // Create a camera, zoom it out from the model a bit, and add it to the scene.
		      camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
		      camera.position.set(6,3,6);
		      scene.add(camera);
                      alert("cam");
		      // Create an event listener that resizes the renderer with the browser window.
		      container.addEventListener('resize', function() {
			  //var WIDTH = container.style.width,HEIGHT = container.style.height;
			  var WIDTH = container.offsetWidth,HEIGHT = container.offsetHeight;
			  //var WIDTH = 200,HEIGHT = 200;
			  renderer.setSize(WIDTH/2, HEIGHT);
			  camera.aspect = WIDTH / HEIGHT;
			  camera.updateProjectionMatrix();
		      });
                    //alert("bfr ld cam");
		      // Set the background color of the scene.
		     // renderer.setClearColorHex(0x000047, 1);
                    //alert("set colour");
		      // Create a light, set its position, and add it to the scene.
		      var light = new THREE.PointLight(0xffffff);
		      light.position.set(-100,200,100);
		      scene.add(light);
                        alert("bfr ld json");
                     fileUrl= src1[0] + ".json";
		      // Load in the mesh and add it to the scene.
		      var loader = new THREE.JSONLoader();
                          loader.load(fileUrl, function(geometry){
			  var material = new THREE.MeshLambertMaterial({color: 0xffffff});
			  mesh = new THREE.Mesh(geometry, material);
			  scene.add(mesh);
                          
		      });
              
            alert("file load");

		      // Add OrbitControls so that we can pan around with the mouse.
		      controls = new THREE.OrbitControls(camera, renderer.domElement);

		    }

		    // Renders the scene and updates the render as needed.
		    function animate() {

		      // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		      requestAnimationFrame(animate);
		      
		      // Render the scene.
		      renderer.render(scene, camera);
		      controls.update();

		    }
}
