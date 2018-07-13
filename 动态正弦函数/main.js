define(['sampleUtils'], function (sampleUtils){
　　var canvas = document.getElementById("sineCanvas");
	canvas.width = 1280;
	canvas.height = 300;

	// TODO 全局变量
	var sampleRange = 2 * Math.PI; //采样范围
	var sampleCount = 60; // 采样值
	var scale = 50;
	var offset = [100, 200];

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

　　// 根据采样范围，采样值，确定x轴样品集
	var sampleSet = sampleUtils.sample(sampleRange, sampleCount);
	// 调用sine函数求出点集
	var pointSet = sampleUtils.calculate(sampleSet, Math.sin);
	// 缩放
	pointSet = sampleUtils.zoom(pointSet, scale);
	// 平移
	pointSet = sampleUtils.translate(pointSet, offset);
	// 绘制
	draw(pointSet);
});