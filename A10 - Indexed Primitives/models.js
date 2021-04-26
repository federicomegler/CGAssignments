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
	var SPHERE_DIV = 36;
	var i, ai, si, ci;
	var j, aj, sj, cj;
	var p1, p2;
	var vert3 = [],ind3 = [];
	for (j = 0; j <= SPHERE_DIV/2; j++) 
	{
	  aj = j * Math.PI / SPHERE_DIV;
	  sj = Math.sin(aj);
	  cj = Math.cos(aj);
	  for (i = 0; i <= SPHERE_DIV; i++) 
	  {
		ai = i * 2 * Math.PI / SPHERE_DIV;
		si = Math.sin(ai);
		ci = Math.cos(ai);
		x = si * sj;  // X
		y = cj;       // Y
		z = ci * sj;  // Z
		vert3.push([x,y,z]);
	  }
	}
  
	for (j = 0; j < SPHERE_DIV/2; j++)
	{
	  for (i = 0; i < SPHERE_DIV; i++)
	  {
		p1 = j * (SPHERE_DIV+1) + i;
		p2 = p1 + (SPHERE_DIV+1);
		ind3.push(p1);
		ind3.push(p2);
		ind3.push(p1 + 1);
		ind3.push(p1 + 1);
		ind3.push(p2);
		ind3.push(p2 + 1);
	  }
	}

	var color3 = [0.0, 1.0, 0.0];
	addMesh(vert3, ind3, color3);
}

