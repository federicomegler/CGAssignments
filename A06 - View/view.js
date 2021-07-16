function view() {
	// Make a Look-In-Direction matrix centered at (5,2.5,0), looking west and aiming 30 degrees down.
	var A1 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make a Look-In-Direction matrix centered at (0,-1,-5), angled 170 degrees, with an elevation of 15 degrees, and a roll of 45 degrees.
	var A2 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make a Look-At-Matrix, centered at (-4, 2, -4), aiming at (0,0.5,0.5) and with up-vector (0,1,0).
		var A3 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
			   
	// Make a Look-At-Matrix, centered at (2.57, 0, 0), aiming at (2.8,0,-1) and with up-vector (1,0,0).
		var A4 =  [1.0,		0.0,		0.0,		0.0,
			   0.0,		1.0,		0.0,		0.0,
			   0.0,		0.0,		1.0,		0.0,
			   0.0,		0.0,		0.0,		1.0];
		
	//exercise 1
	//Mv = R_z(-ro)*R_x(-beta)*R_y(-alpha)*T(-x,-y,-z)
	var ro = 0;
	var alpha = 90;
	var beta = -30;
	//ometto ro che vale 0
	A1 = utils.MakeRotateXMatrix(-beta);
	A1 = utils.multiplyMatrices(A1, utils.MakeRotateYMatrix(-alpha));
	A1= utils.multiplyMatrices(A1, utils.MakeTranslateMatrix(-5,-2.5,0));

	//exercise 2
	ro = 45;
	beta = 15;
	alpha = 170;
	A2 = utils.MakeRotateZMatrix(-ro);
	A2 = utils.multiplyMatrices(A2,utils.MakeRotateXMatrix(-beta));
	A2 = utils.multiplyMatrices(A2, utils.MakeRotateYMatrix(-alpha));
	A2= utils.multiplyMatrices(A2, utils.MakeTranslateMatrix(0,1,5));

	//exercise 3
	
	// V_z = (c-a)/(|c-a|)
	function getZVector(cx,cy, cz, ax, ay, az){
		vx=(cx-ax)/Math.sqrt(Math.pow(cx-ax,2) + Math.pow(cy-ay,2)+ Math.pow(cz-az,2));
		vy=(cy-ay)/Math.sqrt(Math.pow(cx-ax,2) + Math.pow(cy-ay,2)+ Math.pow(cz-az,2));
		vz=(cz-az)/Math.sqrt(Math.pow(cx-ax,2) + Math.pow(cy-ay,2)+ Math.pow(cz-az,2));
		return [vx, vy, vz];
	}
	
	//V_x = (U x V_z)/(|U x V_z|)
	function getXVector(u, vz){
		den = Math.sqrt(Math.pow(utils.crossVector(u,vz)[0],2) + Math.pow(utils.crossVector(u,vz)[1],2)+ Math.pow(utils.crossVector(u,vz)[2],2));
		num = utils.crossVector(u,vz);
		return [num[0]/den,num[1]/den,num[2]/den]
	}

	//V_y = V_z x V_x
	function getYVector(vz,vx){
		return utils.crossVector(vz,vx);
	}

	var c = [-4,2,-4];
	var a = [0,0.5,0.5];
	var u = [0,1,0];
	vz = getZVector(c[0],c[1],c[2],a[0],a[1],a[2]);
	vx = getXVector(u,vz);
	vy = getYVector(vz,vx);
	console.log(vx,vy,vz);

	A3 = [vx[0], vy[0], vz[0],c[0],
	vx[1], vy[1], vz[1],c[1],
	vx[2], vy[2], vz[2],c[2],
	0,0,0,1];

	A3 = utils.invertMatrix(A3);


	//exercise 4
	c = [2.57,0,0];
	a = [2.8,0,-1];
	u = [1,0,0];
	vz = getZVector(c[0],c[1],c[2],a[0],a[1],a[2]);
	vx = getXVector(u,vz);
	vy = getYVector(vz,vx);
	console.log(vx,vy,vz);

	A4 = [vx[0], vy[0], vz[0],c[0],
	vx[1], vy[1], vz[1],c[1],
	vx[2], vy[2], vz[2],c[2],
	0,0,0,1];

	A4 = utils.invertMatrix(A4);


	return [A1, A2, A3, A4];
}