var scene,camera,renderer;
function createScene(){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,10000);
	camera.position.z = 200;
	camera.position.y = 100;
	camera.position.x = 0;
	renderer = new THREE.WebGLRenderer({
		alpha:true,
		antialias:true
	});
	renderer.setSize(window.innerWidth,window.innerHeight);
	renderer.shadowMap.enabled = true;
	document.getElementById('world').appendChild(renderer.domElement);
	window.addEventListener('resize',handleWindowResize,false);
}
function handleWindowResize(){
	renderer.setSize(window.innerWidth,window.innerHeight);
	camera.aspect = window.innerWidth/window.innerHeight;
	camera.updateProjectionMatrix(); 
}
