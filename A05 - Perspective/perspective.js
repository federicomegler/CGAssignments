function perspective() {
	// Make perspective projection, FoV-y = 70 deg, a = 16/9, n = 1, f = 101.
	var A1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make perspective projection, FoV-y = 105 deg, a = 16/9, n = 1, f = 101
	var A2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make perspective projection, FoV-y = 40 deg, a = 16/9, n = 1, f = 101
	var A3 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make perspective projection, FoV-y = 90 deg, a = 4/3, n = 1, f = 101. Note: since the aspect ratio is not correct, the image should appear to be deformed
	var O1 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	// Make perspective projection, l = -1.2, r = 0, t = 0.3375, b = -0.3375, n = 1, f = 101. Note: due to the asimmetry of this projection, only the left part of the scene should be visible
	var O2 =  [0.05,	0.0,		0.0,		0.0,
			   0.0,		0.05,		0.0,		0.0,
			   0.0,		0.0,		0.05,		0.0,
			   0.0,		0.0,		0.0,		1.0];

	var a = 16/9;
	var tan = Math.tan(utils.degToRad(70)/2);
	var f=101;
	var n= 1;
	//esercizio 1
	var persp = [1/(a*tan), 0, 0, 0,
				0, 1/tan , 0, 0,
				0, 0, (f+n)/(n-f), (2*f*n)/(n-f),
				0,0,-1,0];
	A1 = persp;

	tan = Math.tan(utils.degToRad(105)/2);
	A2 = [1/(a*tan), 0, 0, 0,
		0, 1/tan , 0, 0,
		0, 0, (f+n)/(n-f), (2*f*n)/(n-f),
		0,0,-1,0];

	tan = Math.tan(utils.degToRad(40)/2);
	A3 = [1/(a*tan), 0, 0, 0,
		0, 1/tan , 0, 0,
		0, 0, (f+n)/(n-f), (2*f*n)/(n-f),
		0,0,-1,0];
	
	tan = Math.tan(utils.degToRad(90)/2);
	a = 4/3;
	O1 = [1/(a*tan), 0, 0, 0,
		0, 1/tan , 0, 0,
		0, 0, (f+n)/(n-f), (2*f*n)/(n-f),
		0,0,-1,0];

	var l = -1.2;
	var r = 0;
	var t = 0.3375;
	var b = -0.3375;

	O2 = [(2*n)/(r-l), 0, (r+l)/(r-l), 0,
			0, (2*n)/(t-b), (t+b)/(t-b),0,
			0,0,(f+n)/(n-f),(2*f*n)/(n-f),
			0,0,-1,0];
	return [A1, A2, A3, O1, O2];
}