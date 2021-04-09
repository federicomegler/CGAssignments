function move() {
	// Rotate 60 degrees around an arbitrary axis passing through (0,1,-1).
	// The x-axis can be aligned to the arbitrary axis after a rotation of 45 degrees around the z-axis, 
	// and then 15 degrees around the y-axis.
	var R1 =[1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];					   
	// Half the size of the object along a line that bisects the positive x and y axes on the xy-plane. 
	var S1 = [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Mirror the starship along a plane passing through (1,1,1), and obtained rotating 15 degree around the x axis the xz plane
	var S2 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Apply the inverse of the following sequence of transforms: rotation of 30 degree around the Y axis then Translation of (0, 0, 5), and finally a uniform scaling of a factor of 3.
	var I1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
	
	




	// first ex
	R1 = utils.MakeTranslateMatrix(0,1,-1);
	R1 = utils.multiplyMatrices(R1, utils.MakeRotateYMatrix(15));
	R1 = utils.multiplyMatrices(R1, utils.MakeRotateZMatrix(45));
	R1 = utils.multiplyMatrices(R1, utils.MakeRotateXMatrix(60));
	R1 = utils.multiplyMatrices(R1, utils.MakeRotateZMatrix(-45));
	R1 = utils.multiplyMatrices(R1, utils.MakeRotateYMatrix(-15));
	R1 = utils.multiplyMatrices(R1, utils.MakeTranslateMatrix(0,-1,1));


	//second ex
	S1 = utils.MakeRotateZMatrix(45);
	S1 = utils.multiplyMatrices(S1, utils.MakeScaleNuMatrix(0.5,1,1));
	S1 = utils.multiplyMatrices(S1,utils.MakeRotateZMatrix(-45));

	// third exercise
	S2 = utils.MakeTranslateMatrix(1,1,1);
	S2 = utils.multiplyMatrices(S2, utils.MakeRotateXMatrix(15));
	S2 = utils.multiplyMatrices(S2, utils.MakeScaleNuMatrix(1,-1,1));
	S2 = utils.multiplyMatrices(S2, utils.MakeRotateXMatrix(-15));
	S2 = utils.multiplyMatrices(S2, utils.MakeTranslateMatrix(-1,-1,-1));
	
	// fourth ex
	var rot = utils.MakeRotateYMatrix(30);
	var translation = utils.MakeTranslateMatrix(0,0,5);
	var scale = utils.MakeScaleMatrix(3);
	var mult = utils.multiplyMatrices(utils.multiplyMatrices(utils.invertMatrix(rot),utils.invertMatrix(translation)), utils.invertMatrix(scale));
	return [R1, S1, S2, mult];
}

