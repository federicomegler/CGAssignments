// these global variables are used to contain the current angles of the world
// HERE YOU WILL HAVE TO ADD ONE OR MORE GLOBAL VARIABLES TO CONTAIN THE ORIENTATION
// OF THE OBJECT

// this function returns the world matrix with the updated rotations.
// parameters rvx, rvy and rvz contains a value in the degree that how much the object rotates in the given direction.

Pitch = 0;
Yaw = 0;
Roll = 0;

// I quaternion sono definiti come:
// q = cos(tetha/2)+sin(tetha/2)(ix+jy+kx)

var rad = utils.degToRad(1);
var quaternion = new Quaternion();

function updateWorld(rvx, rvy, rvz) {
	
	var new_quaternion = Quaternion(Math.cos(rad/2), Math.sin(rad/2)*rvx, Math.sin(rad/2)*rvy, Math.sin(rad/2)*rvz);
	quaternion = new_quaternion.mul(quaternion);
	var out = quaternion.toMatrix4();
	return out;
}