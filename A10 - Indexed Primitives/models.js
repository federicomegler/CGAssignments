function buildGeometry() {
	var i;
	

	// Draws function y = sin(x) * cos(z) with -3 <= x <= 3 and -3 <= z <= 3.
	///// Creates vertices
	var vert2 = [];
	var scale = 10;
	var dim = Math.pow(scale,2);
	for(i = 0; i <= dim; i++) {
		for(j = 0; j <= dim; j++) {
			x = i/scale-3;
			z = j/scale-3;
			vert2[i*(dim+1)+j] = [x, Math.cos(z)*Math.sin(x), z];
		}
	}
	////// Creates indices
	var ind2 = [];
	for(i = 0; i < dim; i++) {
		for(j = 0; j < dim; j++) {
			ind2[6*(i*(dim+1)+j)  ] = (dim+1)*j+i;
			ind2[6*(i*(dim+1)+j)+1] = (dim+1)*j+i+1;
			ind2[6*(i*(dim+1)+j)+2] = (dim+1)*(j+1)+i+1;
			ind2[6*(i*(dim+1)+j)+3] = (dim+1)*j+i;
			ind2[6*(i*(dim+1)+j)+4] = (dim+1)*(j+1)+i+1; 
			ind2[6*(i*(dim+1)+j)+5] = (dim+1)*(j+1)+i;
		}
	}
	
	console.log(ind2);
	console.log(vert2);
	var color2 = [0.0, 0.0, 1.0];
	addMesh(vert2, ind2, color2);






	// Draws a Half Sphere
	///// Creates vertices
	var circle  = 4;
	var radius = 8;
	var vert3 = [];
	for(i = 0; i < circle; i++) {
		for(j = 0; j < radius; j++) {
			x = ((circle-i-1)*Math.cos((2*Math.PI/radius)*j)).toFixed(4);
			z = ((circle-i-1)*Math.sin((2*Math.PI/radius)*j)).toFixed(4);
			y = (Math.abs(Math.sqrt(Math.pow((circle-i-1),2)-Math.pow(x,2)-Math.pow(z,2)))).toFixed(4);
			vert3[i*(radius)+j] = [x, y, z];
		}
	}
	
	////// Creates indices
	var ind3 = [];
	for(i = 0; i < circle; i++) {
		for(j = 0; j < radius-2; j++) {
				ind3[6*(i*(radius)+j)  ] = (radius)*j+i;
				ind3[6*(i*(radius)+j)+1] = (radius)*j+i+1;
				ind3[6*(i*(radius)+j)+2] = (radius)*(j+1)+i+1;
				ind3[6*(i*(radius)+j)+3] = (radius)*j+i;
				ind3[6*(i*(radius)+j)+4] = (radius)*(j+1)+i+1;
				ind3[6*(i*(radius)+j)+5] = (radius)*(j+1)+i;
		}
	}
	console.log(vert3);
	console.log(ind3);
	
	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
}

