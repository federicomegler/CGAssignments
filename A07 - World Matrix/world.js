function world() {
	// Positioned in 0,0,-3. Yaw=90, Pitch and Roll = 0
	var A1 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
			   
	// Positioned in 0,2,0. Yaw=0, Pitch = 60, Roll = 0, 1/10th of size
	var A2 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
			   
	// Positioned in 0,0,0. Yaw=30, Pitch = 0 Roll = 45
	var A3 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];
			   
	// Positioned in 2,0,2. Yaw=180, Pitch and Roll = 0, two times wider
	var A4 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];

	// Positioned in 1,-1,2.5. Yaw=-30, Pitch = 45 Roll = -15, Scaled with the following factors: 0.8 (x), 0.75 (y), 1.2 (z)
	var A5 =  [1.0, 0.0, 0.0, 0.0,
			   0.0, 1.0, 0.0, 0.0,
			   0.0, 0.0, 1.0, 0.0,
			   0.0, 0.0, 0.0, 1.0];



	//exercise 1
	A1 = utils.MakeTranslateMatrix(0,0,-3);
	A1 = utils.multiplyMatrices(A1, utils.MakeRotateYMatrix(90));
	A1 = utils.multiplyMatrices(A1, utils.MakeRotateXMatrix(0));
	A1 = utils.multiplyMatrices(A1, utils.MakeRotateZMatrix(0));

	//exercise 2
	A2 = utils.MakeTranslateMatrix(0,2,0);
	A2 = utils.multiplyMatrices(A2, utils.MakeRotateYMatrix(0));
	A2 = utils.multiplyMatrices(A2, utils.MakeRotateXMatrix(60));
	A2 = utils.multiplyMatrices(A2, utils.MakeRotateZMatrix(0));
	A2 = utils.multiplyMatrices(A2, utils.MakeScaleMatrix(1/10));

	//exercise 3
	A3 = utils.MakeTranslateMatrix(0,0,0);
	A3 = utils.multiplyMatrices(A3, utils.MakeRotateYMatrix(30));
	A3 = utils.multiplyMatrices(A3, utils.MakeRotateXMatrix(0));
	A3 = utils.multiplyMatrices(A3, utils.MakeRotateZMatrix(45));

	//exercise 4
	A4 = utils.MakeTranslateMatrix(2,0,2);
	A4 = utils.multiplyMatrices(A4, utils.MakeRotateYMatrix(180));
	A4 = utils.multiplyMatrices(A4, utils.MakeRotateXMatrix(0));
	A4 = utils.multiplyMatrices(A4, utils.MakeRotateZMatrix(0));
	A4 = utils.multiplyMatrices(A4, utils.MakeScaleNuMatrix(2,1,1));

	//exercise 5
	A5 = utils.MakeTranslateMatrix(1,-1,2.5);
	A5 = utils.multiplyMatrices(A5, utils.MakeRotateYMatrix(-30));
	A5 = utils.multiplyMatrices(A5, utils.MakeRotateXMatrix(45));
	A5 = utils.multiplyMatrices(A5, utils.MakeRotateZMatrix(-15));
	A5 = utils.multiplyMatrices(A5, utils.MakeScaleNuMatrix(0.8,0.75,1.2));
	return [A1, A2, A3, A4, A5];
}