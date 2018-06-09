var sea;
function sea(){
	//创建圆柱（顶面半径。底面半径）
	var gemo = new THREE.CylinderGeometry(600,600,800,40,10);
	
	gemo.rotateX(-Math.PI/2);
	var mat = new THREE.MeshPhongMaterial({
		color:0x68c3c0,
		transparent:true,
		opcaity:0.6,
		shading:THREE.FlatShading
	})
	this.mesh = new THREE.Mesh(gemo,mat);

	this.mesh.receiveShadow = true;

}

function createSea(){
	sea = new sea();
	sea.mesh.position.y = -600;
	scene.add(sea.mesh);
}
