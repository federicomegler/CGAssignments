function drawSceneTree(S) {
	create_world(S,utils.identityMatrix(),0);
}

function create_world(S,mf,i){
	console.log(i);
	if(S[i][6] == -1){
		var m1 = utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
			utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
			utils.MakeRotateZMatrix(S[i][5])),
			utils.MakeRotateXMatrix(S[i][3])),
			utils.MakeRotateYMatrix(S[i][4]));
			
		var m2 = utils.multiplyMatrices(mf, m1);
		draw(i,m2);
	}
	else{
		var m1 = utils.multiplyMatrices(utils.multiplyMatrices(utils.multiplyMatrices(
			utils.MakeTranslateMatrix(S[i][0], S[i][1], S[i][2]),
			utils.MakeRotateZMatrix(S[i][5])),
			utils.MakeRotateXMatrix(S[i][3])),
			utils.MakeRotateYMatrix(S[i][4]));
			
		var m2 = utils.multiplyMatrices(mf, m1);
		
		
		var j=0;
		for(j=S[i][6]; j<=S[i][7]; j++){
			create_world(S,m2,j);
		}
		draw(i,m2);
	}
}