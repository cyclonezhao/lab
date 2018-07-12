(function(){
	var canvas = document.getElementById("sineCanvas");
	canvas.width = 800;
	canvas.height = 300;

	// TODO 全局变量
	var sampleCount = 60;
	var scale = 50;
	var offset = [100, 200];

	function main(){
		// 根据采样范围，采样值，确定x轴样品集
		var sampleSet_x = generateSampleSet_x(sampleCount);
		// 调用sine函数求出点集
		var pointSet = sine(sampleSet_x);
		// 缩放
		pointSet = zoom(pointSet, scale);
		// 平移
		pointSet = translate(pointSet, offset);
		// 绘制
		draw(pointSet);
	}

	function generateSampleSet_x(sampleCount){
		var sampleSet_x = [];
		var sampleRange = 2 * Math.PI; // 采样范围  TODO 考虑定义成一个输入变量？
		var unitSample = sampleRange / sampleCount;
		for(var i = 1; i <= sampleCount; i++){
			sampleSet_x.push(unitSample * i);
		}

		var last = sampleSet_x.pop();
		sampleSet_x.push(sampleRange);
		return sampleSet_x;
	}
	function sine(sampleSet_x){
		var pointSet = [];
		var count = sampleSet_x.length;
		for(var i = 0; i < count; i++){
			pointSet.push([sampleSet_x[i], Math.sin(sampleSet_x[i])]);
		}
		return pointSet;

	}
	function zoom(pointSet, scale){
		var newPointSet = [];
		var count = pointSet.length;
		for(var i = 0; i < count; i++){
			newPointSet.push([pointSet[i][0] * scale, pointSet[i][1] * scale]);
		}
		return newPointSet;
	}
	function translate(pointSet, offset){
		var newPointSet = [];
		var count = pointSet.length;
		for(var i = 0; i < count; i++){
			newPointSet.push([pointSet[i][0] + offset[0], pointSet[i][1] + offset[1]]);
		}
		return newPointSet;
	}
	function draw(pointSet){
		var ctx = canvas.getContext("2d");
		var point = pointSet[0];
		ctx.moveTo(point[0], point[1]);
		var count = pointSet.length;
		for(var i = 1; i < count; i++){
			point = pointSet[i];
			ctx.lineTo(point[0], point[1]);
		}
		ctx.stroke();
	}

	main();
})();