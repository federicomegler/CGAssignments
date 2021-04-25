function shaders() {
// The shader can find the required informations in the following variables:

//vec3 fs_pos;		// Position of the point in 3D space
//
//float SpecShine;		// specular coefficient for both Blinn and Phong
//float DToonTh;		// Threshold for diffuse in a toon shader
//float SToonTh;		// Threshold for specular in a toon shader
//
//vec4 diffColor;		// diffuse color
//vec4 ambColor;		// material ambient color
//vec4 specularColor;		// specular color
//vec4 emit;			// emitted color
//	
//vec3 normalVec;		// direction of the normal vecotr to the surface
//vec3 eyedirVec;		// looking direction
//
//
// Lighr directions can be found into:
//vec3 lightDirA;
//vec3 lightDirB;
//vec3 lightDirC;
//
//and intensity is returned into:
//
//vec4 lightColorA;
//vec4 lightColorB;
//vec4 lightColorC;
//
// Ambient light contribution can be found intop
//
// vec4 ambientLight;

// Lambert diffuse and Ambient material. No specular or emisssion.
var S1 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + ambientLight * ambColor, 0.0, 1.0);
`;

// Lambert diffuse and Blinn specular. No ambient and emission.
var S2 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	vec4 specA = pow(clamp(dot(normalVec, normalize(lightDirA + eyedirVec)), 0.0,1.0), SpecShine) * lightColorA;
	vec4 specB = pow(clamp(dot(normalVec, normalize(lightDirB + eyedirVec)), 0.0,1.0), SpecShine) * lightColorB;
	vec4 specC = pow(clamp(dot(normalVec, normalize(lightDirC + eyedirVec)), 0.0,1.0), SpecShine) * lightColorC;
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + specularColor * (specA + specB + specC), 0.0, 1.0);
`;

// Ambient and Phong specular. No emssion and no diffuse.
var S3 = `
	vec4 specA = pow(clamp(dot(eyedirVec, -reflect(lightDirA, normalVec)), 0.0,1.0), SpecShine) * lightColorA;
	vec4 specB = pow(clamp(dot(eyedirVec, -reflect(lightDirB, normalVec)), 0.0,1.0), SpecShine) * lightColorB;
	vec4 specC = pow(clamp(dot(eyedirVec, -reflect(lightDirC, normalVec)), 0.0,1.0), SpecShine) * lightColorC;
	out_color = clamp(specularColor * (specA + specB + specC) + ambientLight * ambColor, 0.0, 1.0);
`;

// Diffuse, ambient, emission and Phong specular.
var S4 = `
	vec4 LAcontr = clamp(dot(lightDirA, normalVec),0.0,1.0) * lightColorA;
	vec4 LBcontr = clamp(dot(lightDirB, normalVec),0.0,1.0) * lightColorB;
	vec4 LCcontr = clamp(dot(lightDirC, normalVec),0.0,1.0) * lightColorC;
	
	vec4 specA = pow(clamp(dot(eyedirVec, -reflect(lightDirA, normalVec)), 0.0,1.0), SpecShine) * lightColorA;
	vec4 specB = pow(clamp(dot(eyedirVec, -reflect(lightDirB, normalVec)), 0.0,1.0), SpecShine) * lightColorB;
	vec4 specC = pow(clamp(dot(eyedirVec, -reflect(lightDirC, normalVec)), 0.0,1.0), SpecShine) * lightColorC;

	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + specularColor * (specA + specB + specC) + ambientLight * ambColor + emit, 0.0, 1.0);
`;

// Ambient, Toon diffuse and and Toon (Blinn based) specular. No emssion.
var S5 = `
	vec4 LAcontr =  vec4(0.0,0.0,0.0,0.0);
	vec4 LBcontr =  vec4(0.0,0.0,0.0,0.0);
	vec4 LCcontr =  vec4(0.0,0.0,0.0,0.0);
	vec4 specA = vec4(0.0,0.0,0.0,0.0);
	vec4 specB =  vec4(0.0,0.0,0.0,0.0);
	vec4 specC =  vec4(0.0,0.0,0.0,0.0);
	
	if(DToonTh <= dot(lightDirA, normalVec)){
		LAcontr = lightColorA;
	}
	if(DToonTh <= dot(lightDirB, normalVec)){
		LBcontr =  lightColorB;
	}
	if(DToonTh <= dot(lightDirC, normalVec)){
		LCcontr =  lightColorC;
	}

	if(SToonTh <= dot(normalVec, normalize(lightDirA + eyedirVec))){
		specA =  lightColorA;
	}
	if(SToonTh <= dot(normalVec, normalize(lightDirB + eyedirVec))){
		specB = lightColorB;
	}
	if(SToonTh <= dot(normalVec, normalize(lightDirC + eyedirVec))){
		specC =  lightColorC;
	}
	
	out_color = clamp(diffColor * (LAcontr + LBcontr + LCcontr) + specularColor * (specA + specB + specC) + ambientLight * ambColor, 0.0, 1.0);
`;

	return [S1, S2, S3, S4, S5];
}

