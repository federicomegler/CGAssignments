function buildGeometry() {
	var i;
	
	// Draws the outline of letter F (replace the vertices and primitive type)
	var vert1 = [[0.0,-5.0,0.0], [0.0,5.0,0.0], [6.0,5.0,0.0], [6.0,3.0, 0.0],[2.0,3.0, 0.0],[2.0,1.0, 0.0],
	[5.0,1.0, 0.0],[5.0,-1.0, 0.0],[2.0,-1.0, 0.0],[2.0,-5.0, 0.0]];

	addMesh(vert1, "O", [1.0, 0.0, 0.0]);


	// Draws a filled S-shaped pattern (replace the vertices and primitive type)
	var vert2 = [[0.0,-5.0,0.0], [7.0,-5.0,0.0], [0.0, -3.0,0.0],[7.0, -3.0,0.0],[5.0, -3.0,0.0],[7.0, 2.0,0.0]
	,[5.0, 0.0,0.0],[5.0, 2.0,0.0], [0.0,0.0,0.0], [0.0,2.0,0.0],[2.0,2.0,0.0],[0.0,7.0,0.0],[2.0,5.0,0.0],
	[7.0,7.0,0.0],[7.0,5.0,0.0]];

	addMesh(vert2, "S", [0.0, 0.0, 1.0]);


	// Draws a filled pentacong (replace the vertices and primitive type)
	var vert3 = [[0.0,0.38, 0.0], [-1.0,-1.0,0.0],[1.0,-1.0,0.0],[1.62,0.9,0.0],[0.0,2.08,0.0],[-1.62,0.9,0.0],[-1.0,-1.0,0.0]];

	addMesh(vert3, "F", [0.0, 1.0, 0.0]);
	
}

