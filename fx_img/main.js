define(['../common/sampleUtils', 'drawer'], function (sampleUtils, drawer){
	// --------------  采样  --------------
	// var sampleSet = sampleUtils.gatherSamples(x_left, x_right);
	drawer.init({
		width: 400,
		height: 300,
		unit: 5,
		origin: {x:200, y:150}
	});

	var fn = x=>-1.2*x+10;
	var left = -20;
	var right = 30;
	var p1 = {x: left, y: fn(left)};
	var p2 = {x: right, y: fn(right)};
	drawer.drawLine(p1, p2);
	drawer.drawPoint({x:0, y:10})

	var sampleSet = sampleUtils.gatherSamples(40, 200);
	sampleSet = sampleSet.map(s=>s-20);
	fn = x=>0.3*x*x + 10;
	var pointSet = sampleSet.map(function(s){
		return {
			x: s,
			y: fn(s)
		};
	});
	for(var i = 0, len = pointSet.length; i < len-2; i++){
		drawer.drawLine(pointSet[i], pointSet[i+1]);
	}

	var sampleSet = sampleUtils.gatherSamples(40, 200);
	sampleSet = sampleSet.map(s=>s-20);
	fn = x=>0.6*x;
	var pointSet = sampleSet.map(function(s){
		return {
			x: s,
			y: fn(s)
		};
	});
	for(var i = 0, len = pointSet.length; i < len-2; i++){
		drawer.drawLine(pointSet[i], pointSet[i+1]);
	}
});

