
function buildGeometry() {
	var i,j;
	// Draws a pyramid --- To complete for the assignment. This is just the one in Assignment 13, where two 0.1, 0.1 UV components have been added to the vertices definitions. Such number must be replaced (differently for each vertexes), to obtain a proper Egyptian Pyramid
		var vert1 = [[0.0,1.0,0.0, 0.0, 0.4472,-0.8944, 0.625, 0.25],[ 1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 0.5, 0.0],[-1.0,-1.0,-1.0, 0.0, 0.4472,-0.8944, 0.75, 0.0],
				 [0.0,1.0,0.0, 0.8944, 0.4472,0.0, 0.625, 0.5],[ 1.0,-1.0, 1.0, 0.8944, 0.4472,0.0, 0.5, 0.25],[ 1.0,-1.0,-1.0, 0.8944, 0.4472,0.0, 0.75, 0.25], 
				 [0.0,1.0,0.0, 0.0, 0.4472,0.8944, 0.625, 0.25],[-1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.5, 0.0],[ 1.0,-1.0, 1.0, 0.0, 0.4472,0.8944, 0.75, 0.0], 
				 [0.0,1.0,0.0, -0.8944, 0.4472,0.0, 0.625, 0.5],[-1.0,-1.0,-1.0, -0.8944, 0.4472,0.0, 0.5, 0.25],[-1.0,-1.0, 1.0, -0.8944, 0.4472,0.0, 0.75, 0.25], 
				 [-1.0,-1.0,-1.0, 0.0,-1.0,0.0, 0.75,0.0],[1.0,-1.0,-1.0, 0.0,-1.0,0.0, 1.0,0.0], [1.0,-1.0,1.0, 0.0,-1.0,0.0, 1.0,0.25], [-1.0,-1.0,1.0, 0.0,-1.0,0.0, 0.75,0.25]
				];
	var ind1 = [0, 1, 2,  3, 4, 5,  6, 7, 8,  9, 10, 11,  12, 13, 14,  12, 14, 15];
	var color1 = [0.0, 0.0, 1.0];
	
	addMesh(vert1, ind1, color1);
	
	// Draws a cube -- To do for the assignment.
	var vert2 = [[-1.0,-1.0,2.0, 0.0, 0.0,1.0,0.125,0.625], [1.0,-1.0,2.0, 0.0, 0.0,1.0,0.25,0.625], [-1.0,1.0,2.0, 0.0, 0.0,1.0,0.125,0.75], [1.0,1.0,2.0, 0.0, 0.0,1.0,0.25,0.75],
					[1.0,-1.0,2.0, 0.1, 0.0,0.0,0.25,0.625], [1.0,-1.0,0.0, 1.0, 0.0,0.0,0.375,0.625], [1.0,1.0,2.0, 1.0, 0.0,0.0,0.25,0.75], [1.0,1.0,0.0, 1.0, 0.0,0.0,0.375,0.75],
					[-1.0,1.0,2.0, 0.0, 1.0,0.0,0.125,0.75], [1.0,1.0,2.0, 0.0, 1.0,0.0,0.25,0.75], [-1.0,1.0,0.0, 0.0, 1.0,0.0,0.125,0.875], [1.0,1.0,0.0, 0.0, 1.0,0.0,0.25,0.875],
					[-1.0,1.0,0.0, 0.0, 0.0,-1.0,0.125,0.875], [1.0,1.0,0.0, 0.0, 0.0,-1.0,0.25,0.875], [-1.0,-1.0,0.0, 0.0, 0.0,-1.0,0.125,1.0], [1.0,-1.0,0.0, 0.0, 0.0,-1.0,0.25,1.0],
					[-1.0,-1.0,0.0, -1.0, 0.0,0.0,0.0,0.625], [-1.0,-1.0,2.0, -1.0, 0.0,0.0,0.125,0.625], [-1.0,1.0,0.0, -1.0, 0.0,0.0,0.0,0.75], [-1.0,1.0,2.0, -1.0, 0.0,0.0,0.125,0.75],
					[-1.0,-1.0,0.0, 0.0, -1.0,0.0,0.125,0.5], [1.0,-1.0,0.0, 0.0, -1.0,0.0,0.25,0.5], [-1.0,-1.0,2.0, 0.0, -1.0,0.0,0.125,0.625], [1.0,-1.0,2.0, 0.0, -1.0,0.0,0.25,0.625]];
	var ind2 = [0,1,3,0,3,2,4,5,7,4,7,6,8,9,11,8,11,10,12,13,15,12,15,14,16,17,19,16,19,18,20,21,23,20,23,22];
	var color2 = [0.0, 1.0, 1.0];
	addMesh(vert2, ind2, color2);
	
	
	// Draws a Cylinder --- To do for the assignment
	var vert4 = [[0.0,2.0,0.0, 0.0,1.0,0.0,0.625,0.875]];
	var ind4 = [];
	i=0;
	ANGLES = 30;
	for(i=0; i < ANGLES; i++){
		//fixed y
		y = 2;
		x = Math.cos((2*Math.PI)*i/ANGLES);
		z = -Math.sin((2*Math.PI)*i/ANGLES);
		//texture
		u = 0.625 + (0.75-0.625)*x;
		v = 0.875 + (1.0-0.875)*z;
		vert4.push([x,y,z, 0.0,1.0,0.0,u.toFixed(3),v.toFixed(3)]);
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
		//texture
		u = 0.5 + 0.5*i/(ANGLES);
		vert4.push([x,2,z, x,0.0,z,u.toFixed(3),0.75]);
		vert4.push([x,-2,z, x,0.0,z,u.toFixed(3),0.5]);
	}
		vert4.push([1.0,2.0,0.0, 1.0,0.0,0.0,1.0,0.75]);
		vert4.push([1.0,-2.0,0.0, 1.0,0.0,0,1.0,0.5]);
	console.log(vert4);
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
			ind4.push(ANGLES*2+ANGLES+2);
			ind4.push(ANGLES*2+ANGLES+1);
			ind4.push(ANGLES*2+ANGLES);
			ind4.push(ANGLES*2+ANGLES+1);
			ind4.push(ANGLES*2-1+ANGLES);
		}
	}
	
	vert4.push([0.0,-2.0,0.0,0.0,-1.0,0.0,0.875,0.875])
	for(i=0; i < ANGLES; ++i){
		//fixed y
		y = -2;
		x = Math.cos((2*Math.PI/ANGLES)*i);
		z = -Math.sin((2*Math.PI/ANGLES)*i);
		//texture
		u = 0.875 + (1.0-0.875)*x;
		v = 0.875 + (1.0-0.875)*z;
		vert4.push([x,y,z, 0.0,-1.0,0.0,u.toFixed(3),v.toFixed(3)]);
	}
	
	for(i=0; i<ANGLES; i++){
		if(i != ANGLES-1){
			ind4.push(ANGLES*3 + 3);
			ind4.push(i+2 + ANGLES*3 + 3);
			ind4.push(i+1 + ANGLES*3 + 3);
			
		}
		else{
			ind4.push(ANGLES*3 +3);
			ind4.push(ANGLES*3 +4);
			ind4.push(ANGLES*4 +3);
		}
	}
	console.log(vert4, ind4);
	var color3 = [0.0, 1.0, 1.0];
	addMesh(vert4, ind4, color3);
}