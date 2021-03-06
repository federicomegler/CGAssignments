function buildGeometry() {
	// Draws a pyramid --- Already done, just for inspiration
	var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944], 
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0], [-1.0,-1.0,1.0, 0.0,-1.0,0.0],
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	addMesh(vert1, ind1, color1);
	
	// Draws a cube --- To do for the assignment.
	var vert2 = [[-1.0,-1.0,2.0, 0.0, 0.0,1.0], [1.0,-1.0,2.0, 0.0, 0.0,1.0], [-1.0,1.0,2.0, 0.0, 0.0,1.0], [1.0,1.0,2.0, 0.0, 0.0,1.0],
					[1.0,-1.0,2.0, 0.1, 0.0,0.0], [1.0,-1.0,0.0, 1.0, 0.0,0.0], [1.0,1.0,2.0, 1.0, 0.0,0.0], [1.0,1.0,0.0, 1.0, 0.0,0.0],
					[-1.0,1.0,2.0, 0.0, 1.0,0.0], [1.0,1.0,2.0, 0.0, 1.0,0.0], [-1.0,1.0,0.0, 0.0, 1.0,0.0], [1.0,1.0,0.0, 0.0, 1.0,0.0],
					[-1.0,1.0,0.0, 0.0, 0.0,-1.0], [1.0,1.0,0.0, 0.0, 0.0,-1.0], [-1.0,-1.0,0.0, 0.0, 0.0,-1.0], [1.0,-1.0,0.0, 0.0, 0.0,-1.0],
					[-1.0,-1.0,0.0, -1.0, 0.0,0.0], [-1.0,-1.0,2.0, -1.0, 0.0,0.0], [-1.0,1.0,0.0, -1.0, 0.0,0.0], [-1.0,1.0,2.0, -1.0, 0.0,0.0],
					[-1.0,-1.0,0.0, 0.0, -1.0,0.0], [1.0,-1.0,0.0, 0.0, -1.0,0.0], [-1.0,-1.0,2.0, 0.0, -1.0,0.0], [1.0,-1.0,2.0, 0.0, -1.0,0.0]];
	var ind2 = [0,1,3,0,3,2,4,5,7,4,7,6,8,9,11,8,11,10,12,13,15,12,15,14,16,17,19,16,19,18,20,21,23,20,23,22];
	var color2 = [1.0, 0.64, 0.0];
	addMesh(vert2, ind2, color2);
	
	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3 --- To do for the assignment.
	x=0;
	y=0;

	function crossProduct (a, b) {

		var vec3 = new Array(3);
	
		vec3[0] = a[1] * b[2] - a[2] * b[1];
		vec3[1] = a[2] * b[0] - a[0] * b[2];
		vec3[2] = a[0] * b[1] - a[1] * b[0];
	
		return vec3;
	
	  }

	  function normalize (a) {

		var vec3 = new Array(3);
	
		var len = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
	
		if (len > 0) {
	
		  len = 1 / Math.sqrt(len);
	
		  vec3[0] = len * a[0];
		  vec3[1] = len * a[1];
		  vec3[2] = len * a[2];
	
		}
	
		return vec3;
	
	  }

	var vert3 = [];
	var scale = 10;
	var dim = Math.pow(scale,2);
	for(i = 0; i <= dim; i++) {
		for(j = 0; j <= dim; j++) {
			x = i/scale-3;
			z = j/scale-3;
			y = Math.cos(z)*Math.sin(x);
			dx = [1, Math.cos(x)*Math.cos(z), 0];
			dz = [0, -Math.sin(z)*Math.sin(x), 1];
			prod = crossProduct(dz, dx);
			norm = normalize(prod); 
			vert3[i*(dim+1)+j] = [x, y, z, norm[0], norm[1], norm[2]];
		}
	}
	
	var ind3 = [];
	for(i = 0; i < dim; i++) {
		for(j = 0; j < dim; j++) {
			ind3[6*(i*(dim+1)+j)  ] = (dim+1)*j+i;
			ind3[6*(i*(dim+1)+j)+1] = (dim+1)*j+i+1;
			ind3[6*(i*(dim+1)+j)+2] = (dim+1)*(j+1)+i+1;
			ind3[6*(i*(dim+1)+j)+3] = (dim+1)*j+i;
			ind3[6*(i*(dim+1)+j)+4] = (dim+1)*(j+1)+i+1; 
			ind3[6*(i*(dim+1)+j)+5] = (dim+1)*(j+1)+i;
		}
	}
	
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert3, ind3, color3);
	
	// Draws a Cylinder --- To do for the assignment
	var vert4 = [[0.0,2.0,0.0, 0.0,1.0,0.0]];
	var ind4 = [];
	var color4 = [1.0, 1.0, 0.0];
	i=0;
	ANGLES = 30;
	for(i=0; i < ANGLES; i++){
		//fixed y
		y = 2;
		x = Math.cos((2*Math.PI)*i/ANGLES);
		z = -Math.sin((2*Math.PI)*i/ANGLES);
		vert4.push([x,y,z, 0.0,1.0,0.0]);
	}

	for(i=0; i<ANGLES; i++){
		if(i != ANGLES-1){
			ind4.push(i+1);
			ind4.push(i+2);
			ind4.push(0);
		}
		else{
			ind4.push(ANGLES);
			ind4.push(1);
			ind4.push(0);
		}
	}
	
	for(i=0; i < ANGLES; ++i){
		//fixed y
		x = Math.cos((2*Math.PI)*i/ANGLES);
		z = -Math.sin((2*Math.PI)*i/ANGLES);
		vert4.push([x,2,z, x,0.0,z]);
		vert4.push([x,-2,z, x,0.0,z]);
	}
	for(i=0; i<2*ANGLES; i=i+2){
		if(i != 2*ANGLES-2){
			ind4.push(i+1+ANGLES+1);
			ind4.push(i+3+ANGLES+1);
			ind4.push(i+2+ANGLES+1);
			ind4.push(i+1+ANGLES+1);
			ind4.push(i+2+ANGLES+1);
			ind4.push(i+ANGLES+1);
		}
		else{
			ind4.push(ANGLES*2+ANGLES);
			ind4.push(2+ANGLES);
			ind4.push(1+ANGLES);
			ind4.push(ANGLES*2+ANGLES);
			ind4.push(1+ANGLES);
			ind4.push(ANGLES*2-1+ANGLES);
		}
	}
	
	vert4.push([0.0,-2.0,0.0,0.0,-1.0,0.0])
	for(i=0; i < ANGLES; ++i){
		//fixed y
		y = -2;
		x = Math.cos((2*Math.PI/ANGLES)*i);
		z = -Math.sin((2*Math.PI/ANGLES)*i);
		vert4.push([x,y,z, 0.0,-1.0,0.0]);
	}
	
	for(i=0; i<ANGLES; i++){
		if(i != ANGLES-1){
			ind4.push(ANGLES*3 + 1);
			ind4.push(i+2 + ANGLES*3 + 1);
			ind4.push(i+1 + ANGLES*3 + 1);
			
		}
		else{
			ind4.push(ANGLES*3 +1);
			ind4.push(ANGLES*3 +2);
			ind4.push(ANGLES*4 +1);
		}
	}
	addMesh(vert4, ind4, color4);

	// Draws a Sphere
	
	var N_CIRCLES = 36;
	var i, alphai, sini, cosi;
	var j, alphaj, sinj, cosj;
	
	var p1, p2;
	var vert5 = [],ind5 = [];
	for (j = 0; j <= N_CIRCLES; j++) 
	{
	  alphaj = j * Math.PI / N_CIRCLES;
	  sinj = Math.sin(alphaj);
	  cosj = Math.cos(alphaj);
	  for (i = 0; i <= N_CIRCLES; i++) 
	  {
		alphai = i * 2 * Math.PI / N_CIRCLES;
		sini = Math.sin(alphai);
		cosi = Math.cos(alphai);
		x = sini * sinj;  // X
		y = cosj;       // Y
		z = cosi * sinj;  // Z
		let normal = normalize([x,y,z]);
		vert5.push([x,y,z,normal[0],normal[1],normal[2]]);
	  }
	}
  
	for (j = 0; j < N_CIRCLES; j++)
	{
	  for (i = 0; i < N_CIRCLES; i++)
	  {
		//ottengo i punti di fianco a quello che sto considerando ma nel cerchio successivo
		p1 = j * (N_CIRCLES+1) + i;
		p2 = p1 + (N_CIRCLES+1);
		ind5.push(p1);
		ind5.push(p2);
		ind5.push(p1 + 1);
		ind5.push(p1 + 1);
		ind5.push(p2);
		ind5.push(p2 + 1);
	  }
	}


	var color5 = [1.0,0.0,0.0];
	addMesh(vert5, ind5, color5);
}
