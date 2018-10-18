define(['../common/sampleUtils', 'drawer'], function (sampleUtils, drawer){
	// --------------  采样  --------------
	// var sampleSet = sampleUtils.gatherSamples(x_left, x_right);
	drawer.init({
		width: 400,
		height: 300,
		unit: 20,
		origin: {x:200, y:150}
	});

	// ================ 直线 ================
	// drawLinearFn(-1.2, 10, -20, 30, "red");

	// ================ 二次函数 ================
	// var fn = x=>0.3*x*x + 3;
	// var sampleSet = sampleUtils.gatherSamples(40, 200);
	// sampleSet = sampleSet.map(s=>s-20);
	// drawWithSamples(sampleSet, fn, "green");

	// ================ 对数 ================
	var fn = x=>Math.log(x);
	var sampleSet = sampleUtils.gatherSamples(4, 80);
	sampleSet = sampleSet.filter(s=>s>0);
	drawWithSamples(sampleSet, fn, "blue");

	// ================ 指数 ================
	var fn = x=>Math.pow(Math.E, x);
	var sampleSet = sampleUtils.gatherSamples(3, 80);
	sampleSet = sampleSet.map(s=>s-1.5);
	drawWithSamples(sampleSet, fn, "green");

	// ================ 幂函数 ================
	var fn = x=>Math.pow(x, 5);
	var sampleSet = sampleUtils.gatherSamples(3, 80);
	sampleSet = sampleSet.map(s=>s-1.5);
	drawWithSamples(sampleSet, fn, "red");

	// ================ 三角函数 ================
	var fn = x=>Math.sin(x);
	var sampleSet = sampleUtils.gatherSamples(7, 80);
	sampleSet = sampleSet.map(s=>s-3.5);
	drawWithSamples(sampleSet, fn, "blue");

	var fn = x=>Math.cos(x);
	var sampleSet = sampleUtils.gatherSamples(7, 80);
	sampleSet = sampleSet.map(s=>s-3.5);
	drawWithSamples(sampleSet, fn, "pink");

	var fn = x=>Math.tan(x);
	var sampleSet = sampleUtils.gatherSamples(7, 80);
	sampleSet = sampleSet.map(s=>s-3.5);
	var sampleSet_1 = sampleSet.filter(s=>2*s < -Math.PI);
	sampleSet = sampleSet.filter(s=>2*s > -Math.PI);
	var sampleSet_2 = sampleSet.filter(s=>2*s < Math.PI);
	var sampleSet_3 = sampleSet.filter(s=>2*s > Math.PI);
	drawWithSamples(sampleSet_1, fn, "green");
	drawWithSamples(sampleSet_2, fn, "green");
	drawWithSamples(sampleSet_3, fn, "green");

	// ================ 关键点 ================
	drawer.drawPoint({x:0, y:3})
	drawer.drawText({x:2, y:3}, "A(0, 3)", 10);

	drawer.drawPoint({x:1, y:0})
	drawer.drawText({x:2, y:-1}, "B(1, 0)", 10);

	function drawLinearFn(k, b, left, right, color){
		var fn = x=>k*x + b;
		var p1 = {x: left, y: fn(left)};
		var p2 = {x: right, y: fn(right)};
		drawer.drawLine(p1, p2, color);
	}

	function drawWithSamples(sampleSet, fn, color){
		var pointSet = sampleSet.map(function(s){
			return {
				x: s,
				y: fn(s)
			};
		});
		drawer.drawPolyline(pointSet, color);
	}
});

