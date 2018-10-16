define(['../common/sampleUtils', 'drawer'], function (sampleUtils, drawer){
	// --------------  采样  --------------
	// var sampleSet = sampleUtils.gatherSamples(x_left, x_right);
	drawer.init({
		width: 400,
		height: 300,
		unit: 5,
		origin: {x:200, y:150}
	});

	// 直线
	drawLinearFn(-1.2, 10, -20, 30, "red");

	// 二次函数
	var fn = x=>0.3*x*x + 3;
	var sampleSet = sampleUtils.gatherSamples(40, 200);
	sampleSet = sampleSet.map(s=>s-20);
	var pointSet = sampleSet.map(function(s){
		return {
			x: s,
			y: fn(s)
		};
	});
	drawer.drawPolyline(pointSet, "green");

	// 导函数
	drawLinearFn(0.6, 0, -20, 20, "blue");

	// 关键点
	drawer.drawPoint({x:0, y:3})
	drawer.drawText({x:2, y:3}, "A(0, 3)", 10);

	function drawLinearFn(k, b, left, right, color){
		var fn = x=>k*x + b;
		var p1 = {x: left, y: fn(left)};
		var p2 = {x: right, y: fn(right)};
		drawer.drawLine(p1, p2, color);
	}
});

