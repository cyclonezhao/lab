define(['sampleUtils', 'canvasCoord'], function (sampleUtils, canvasCoord){
	// 全局变量
	var gbl = (function(){
		var width = 1280;
		var height = 300;
		var sampleRange = 2 * Math.PI; //采样范围
		var sampleCount = 60; // 采样值
		var zoomScale = 50;
		var pt_origin = [100, 200]; // 逻辑坐标系原点相对canvas坐标系的坐标值
	　　var canvas = document.getElementById("sineCanvas");
		var ctx = canvas.getContext("2d");
		canvas.width = width;
		canvas.height = height;

		return{
			getWidth: function(){return width;},
			getHeight: function(){return height;},
			getSampleRange: function(){return sampleRange;},
			getSampleCount: function(){return sampleCount;},
			getZoomScale: function(){return zoomScale;},
			getPt_origin: function(){return pt_origin.slice();},
			// getCanvas: function(){return canvas;},
			getCtx: function(){return ctx;}
		};
	})();

	drawAxes();
	drawSine();
	drawCircle();

	function drawAxes(){
		// x轴，y轴终点
		var pt_x = [gbl.getSampleRange(), 0], pt_y = [0, 2];
		var pt_origin = gbl.getPt_origin();
		// 缩放，转换为canvas坐标
		var transResult = [pt_x, pt_y].map(zoom).map(v=>canvasCoord.transform(pt_origin, v));

		// 绘制: 原点和x、y轴的终点连线
		var ctx = gbl.getCtx();
		transResult.forEach(function(pt_end){
			ctx.moveTo(pt_origin[0], pt_origin[1]);
			ctx.lineTo(pt_end[0], pt_end[1]);
		});
		ctx.stroke();
	}

	function drawSine(){
	　　// 根据采样范围，采样值，确定x轴样品集
		var sampleSet = sampleUtils.gatherSamples(gbl.getSampleRange(), gbl.getSampleCount());
		// 调用sine函数求出点集
		var pointSet = sampleSet.map(v=>[v, Math.sin(v)]);
		// 缩放（等比放大）
		pointSet = pointSet.map(zoom);
		// 转换为canvas坐标系
		pointSet = pointSet.map(v=>canvasCoord.transform(gbl.getPt_origin(), v));
		
		// 绘制
		var pt_start = pointSet.shift();
		var ctx = gbl.getCtx();
		ctx.moveTo(pt_start[0], pt_start[1]);
		pointSet.forEach(v=>ctx.lineTo(v[0], v[1]));
		ctx.stroke();
	}

	function drawCircle(){
		var ctx = gbl.getCtx();
		var pt_origin = gbl.getPt_origin();
		ctx.arc(pt_origin[0], pt_origin[1], gbl.getZoomScale(), 0, Math.PI * 2, true);
		ctx.stroke();
	}

	function zoom(point){
		return [point[0] * gbl.getZoomScale(), point[1] * gbl.getZoomScale()];
	}
});