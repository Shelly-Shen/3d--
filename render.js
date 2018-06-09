function loop(){
	sea.mesh.rotation.z += 0.1;
	renderer.render(scene,camera);
	airPlane.mesh.position.x += 0.1;
	updatePlane();	
	requestAnimationFrame(loop);
}
var _mousePos = {x:0,y:0};
function handleMouseMove(event){
	var tx  = -1+(event.clientX/window.innerWidth)*2;
	var ty  = 1-(event.clientY/window.innerHeight)*2;
	_mousePos.x = tx;
	_mousePos.y = ty;
}
function updatePlane(){
	//x:-100~100   y:25~175
	var targetX = normalize(_mousePos.x,-1,1,-100,100);
	var targetY = normalize(_mousePos.y,-1,1,25,175);
	airPlane.mesh.position.y += (targetY-airPlane.mesh.position.y)*0.1;
	airPlane.mesh.position.x += targetX*0.05;
	airPlane.mesh.rotation.z = (targetY-airPlane.mesh.position.y)*0.01;
	airPlane.mesh.rotation.x = (airPlane.mesh.position.y - targetY)*0.006;
	airPlane.propeller.rotation.x += 0.3;
}
//v当前鼠标位置 
	console.log(THREE._Math);
function normalize(v,vmin,vmax,tmin,tmax){
	var nv = Math.max(Math.min(v,vmax),vmin);

	var dv = vmax-vmin;
	var pc = (nv- vmin)/dv;
	var dt = tmax-tmin;
	var tv = tmin +(pc*dt);
	return tv;
}
