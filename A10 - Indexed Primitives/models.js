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
			// I vertici hanno x e z lineari e y segue la funzione data
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






	// Draws a Half Sphere (con coordinate sferiche)
	
	var DIVISIONS = 72; //Numero di divisioni del cerchio, valido sia per i meridiani che per i paralleli
	var i, alphai, sinalphai, cosalphai;
	var j, alphaj, sinalphaj, cosalphaj;
	var p1, p2;
	var vert3 = [],ind3 = [];
	
	for (j = 0; j <= DIVISIONS/2; j++) //Disegno solo la metà dei paralleli per fare una semisfera
	{
	  alphaj = j * Math.PI / DIVISIONS; //angolo alpha che si sta considerando rispetto ai paralleli
	  sinalphaj = Math.sin(alphaj);
	  cosalphaj = Math.cos(alphaj);
	  //Per ogni punto sull'equatore genero tutti i punti sul meridiano (anche dalla parte opposta)
	  for (i = 0; i <= DIVISIONS; i++) 
	  {
		alphai = i * 2 * Math.PI / DIVISIONS;
		sinalphai = Math.sin(alphai);
		cosalphai = Math.cos(alphai);
		x = sinalphai * sinalphaj;  
		y = cosalphaj;       
		z = cosalphai * sinalphaj;
		vert3.push([x,y,z]);
	  }
	}
  
	for (j = 0; j < DIVISIONS/2; j++)
	{
	  for (i = 0; i < DIVISIONS; i++)
	  {
		p1 = j * (DIVISIONS+1) + i;
		p2 = p1 + (DIVISIONS+1);
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

