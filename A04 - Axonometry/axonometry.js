function axonometry() {
	// Make an isometric view, w = 50, a = 16/9, n = 1, f = 101.
	var A1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make a dimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated 20 around the x-axis
	var A2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make a trimetric view, w = 50, a = 16/9, n = 1, f = 101, rotated -30 around the x-axis and 30 around the y-axis
	var A3 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make an cavalier projection view, w = 50, a = 16/9, n = 1, f = 101, at 45 degrees
	var O1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	// Make a cabinet projection view, w = 50, a = 16/9, n = 1, f = 101, at 60 degrees
	var O2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	//exercise 1
	var w = 50;
	var a = 16/9;
	var n = 1;
	var f = 101;
	isom = [1/w, 0,0,0,
			0,a/w, 0,0,
			0,0,(-2)/(f-n),-(f+n)/(f-n),
			0,0,0,1];
	A1 = utils.multiplyMatrices(isom, utils.MakeRotateXMatrix(35.26));
	A1 = utils.multiplyMatrices(A1, utils.MakeRotateYMatrix (45))

	//exercise 2
	A2 = utils.multiplyMatrices(isom, utils.MakeRotateXMatrix(20));
	A2 = utils.multiplyMatrices(A2, utils.MakeRotateYMatrix (45));

	//exercise 3
	A3 = utils.multiplyMatrices(isom, utils.MakeRotateXMatrix(-30));
	A3 = utils.multiplyMatrices(A3, utils.MakeRotateYMatrix (30));

	//exercise 4
	
	var p = 1;
	var oblique = [1, 0, -p*Math.cos(Math.PI/4), 0,
					0, 1, -p*Math.sin(Math.PI/4),0,
					0,0,1,0,
					0,0,0,1];
	O1 = utils.multiplyMatrices(isom, oblique);

	//Exercise 5
	p = 0.5;
	oblique = [1, 0, -p*Math.cos(Math.PI/3), 0,
		0, 1, -p*Math.sin(Math.PI/3),0,
		0,0,1,0,
		0,0,0,1];
	O2 = utils.multiplyMatrices(isom, oblique);
	return [A1, A2, A3, O1, O2];
}