function Anim1(t) {
	// moving car
	var out = utils.multiplyMatrices(utils.MakeTranslateMatrix(t/4,0.5,0), utils.MakeScaleMatrix(0.25));
	return out;
}

function Anim2(t) {
	// bumping code
	var out = utils.multiplyMatrices( utils.MakeTranslateMatrix(0.75,((Math.abs(t-0.5)*2)/4)+0.5,0), utils.MakeScaleMatrix(0.25));
	return out;
}



function Anim3(t) {
	// rotating fan
	translate = utils.MakeTranslateMatrix(0.625,0.875,0);
	rotate = utils.multiplyMatrices(translate, utils.MakeRotateZMatrix(t*360));
	invtrans = utils.multiplyMatrices(rotate, utils.MakeTranslateMatrix(-0.125,-0.125,0));
	var out = utils.multiplyMatrices(invtrans, utils.MakeScaleMatrix(0.25));
	return out;
}


var i = 0;
var j = 0;
var verticesList = [];
for(i=0; i<6; ++i){
    for(j=0; j<12; ++j){
        verticesList.push([j/12,(1-((i+1)/6))/2]);
    }
}
console.log(verticesList);

function Anim4(t) {
	// buring flame
	var pos = (t*100).toFixed(0)%72;
	var out = utils.multiplyMatrices(utils.MakeTranslateMatrix(verticesList[pos][0],verticesList[pos][1],0), utils.MakeScaleMatrix(1/12));
	return out;
}
