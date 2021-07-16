// Returns the transform matrix obtained interpolating the given positions and angles
function InterpMat(
				tx1, ty1, tz1, rx1, ry1, rz1,
			    tx2, ty2, tz2, rx2, ry2, rz2,
			    a) {
	// tx1, ty1, tz1	-> Initial position
	// rx1, ry1, rz1	-> Initial rotation (in Euler angles)
	// tx2, ty2, tz2	-> Final position
	// rx2, ry2, rz2	-> Final rotation (in Euler angles)
	// a (in 0..1 range)	-> Interpolation coefficient
	//
	// return the interpolated transform matrix with the given position and rotation
	
	// lerp dei punti x, y, z e poi traslazione
	var trasl = utils.MakeTranslateMatrix((1-a)*tx1+a*tx2, (1-a)*ty1+a*ty2, (1-a)*tz1+a*tz2);

	//lerp applicato sui quaternioni
	var q_start = Quaternion.fromEuler(utils.degToRad(rz1),utils.degToRad(rx1),utils.degToRad(ry1));
	var q_end = Quaternion.fromEuler(utils.degToRad(rz2),utils.degToRad(rx2),utils.degToRad(ry2));
	//applico l'interpolazione
	var rot = ((q_start.scale(1-a)).add(q_end.scale(a))).toMatrix4();

	
	//traslo e ruoto
	out = utils.multiplyMatrices(trasl, rot);
	return out;			   
}