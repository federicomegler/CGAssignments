// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.

Pitch = 0;
Yaw = 0;
Roll = 0;
/*
function updateWorld(rvx, rvy, rvz) {

	// compute the rotation matrix
	Pitch = Pitch + rvx;
	Yaw = Yaw + rvy;
	Roll = Roll + rvz;
	var out = utils.MakeWorld(0,0,0, Yaw, Pitch, Roll, 1);

	return out;
}
*/


var rad = utils.degToRad(1);
var quaternion = new Quaternion();

function updateWorld(rvx, rvy, rvz) {
	//quat = Quaternion(1,[rvx,rvy,rvz]).toMatrix4();
	var new_quaternion = Quaternion(Math.cos(rad/2), Math.sin(rad/2)*rvx, Math.sin(rad/2)*rvy, Math.sin(rad/2)*rvz);
	quaternion = new_quaternion.mul(quaternion);
	var out = quaternion.toMatrix4();
	return out;
}