function draw() {
	// line(x1,y1, x2,y2)
	// draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

	// Here there are a few random lines, you will have to replace with your code
	line(-0.5, 0.3,0.3,0.3);
	line(-0.5,0.3,-0.5, -0.3);
	line(-0.5, -0.3, 0.3, -0.3);
	for(i = 0; i < 64; i++) {
		angle = (i/64)*Math.PI/2;  // i/64 * pi/2
		angleplus = (((i+1)/64)*Math.PI/2);
		console.log(Math.PI, Math.sin(angle), Math.cos(angle));
		yps = Math.sin(angle) * 0.3;     //scalo tutto a 0.3 che è il raggio
		xps = Math.cos(angle) * 0.3;
		xpf = Math.cos(angleplus) * 0.3;
		ypf = Math.sin(angleplus) * 0.3;
		line(xps+0.3,yps,xpf+0.3,ypf);  // traslo la x di 0.3
		line(xps+0.3,-yps,xpf+0.3,-ypf); // faccio lo stesso per 0, -pi/2
	}
}
