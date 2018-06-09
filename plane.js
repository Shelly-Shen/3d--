var AirPlane = function(){
	this.mesh = new THREE.Object3D();
	//机舱

	var geoCockpit = new THREE.BoxGeometry(20,50,50,1,1,1);
	var matCockpit = new THREE.MeshPhongMaterial({
		color:colors.red,
		shading:THREE.FlatShading
	});
	geoCockpit.vertices[4].y -= 10;
	geoCockpit.vertices[4].z += 20;
	geoCockpit.vertices[5].y -= 10;
	geoCockpit.vertices[5].z -= 20;
	geoCockpit.vertices[6].y += 30;
	geoCockpit.vertices[6].z += 20;
	geoCockpit.vertices[7].y += 30;
	geoCockpit.vertices[7].z -= 20;
	var cockpit = new THREE.Mesh(geoCockpit,matCockpit);
	cockpit.castShadow = true;
	cockpit.receiveShadow = true;
		this.mesh.add(cockpit);
		//引擎
		var geoEngine = new THREE.BoxGeometry(40,50,50,1,1,1);
	var matEngine = new THREE.MeshPhongMaterial({
		color:colors.white,
		shading:THREE.Flatshading
	});
	var engine = new THREE.Mesh(geoEngine,matEngine);
	engine.position.x = 30;
	engine.castShadow = true;
	engine.receiveShadow = true;
	this.mesh.add(engine);

	//机翼
	var geoWing = new THREE.BoxGeometry(40,5,80,1,1,1);
	var matWing = new THREE.MeshPhongMaterial({
		color:colors.white,
		shading:THREE.Flatshading
	});
	var wing = new THREE.Mesh(geoWing,matWing);
	wing.position.x = 20;
	wing.position.y = 10;
	wing.castShadow = true;
	wing.receiveShadow = true;
	this.mesh.add(wing);
	// propeller
	var geomPropeller = new THREE.BoxGeometry(20,10,10,1,1,1);
	var matPropeller = new THREE.MeshPhongMaterial({color:colors.brown, shading:THREE.FlatShading});
	this.propeller = new THREE.Mesh(geomPropeller, matPropeller);
	this.propeller.castShadow = true;
	this.propeller.receiveShadow = true;
	
	// blades
	var geomBlade = new THREE.BoxGeometry(1,100,20,1,1,1);
	var matBlade = new THREE.MeshPhongMaterial({color:colors.brownDark, shading:THREE.FlatShading});
	
	var blade = new THREE.Mesh(geomBlade, matBlade);
	blade.position.set(8,0,0);
	blade.castShadow = true;
	blade.receiveShadow = true;
	this.propeller.add(blade);
	this.propeller.position.set(50,0,0);
	this.mesh.add(this.propeller);
}

function createPlane(){
	airPlane = new AirPlane();
	scene.add(airPlane.mesh);
}