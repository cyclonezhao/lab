define(['sampleUtils', 'canvasCoord'], function (sampleUtils, canvasCoord){
	// 全局变量
	var gbl = (function(){
		var width = 1280;
		var height = 1024;
		var sampleRange = 2 * Math.PI; //采样范围
		var sampleCount = 60; // 采样值
		var zoomScale = 100;
		var pt_origin = [300, 400]; // 逻辑坐标系原点相对canvas坐标系的坐标值
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
			getCtx: function(){return ctx;},
			angle: 0
		};
	})();

	animate();

	function animate(){
		var ctx = gbl.getCtx();
		ctx.clearRect(0, 0, gbl.getWidth(), gbl.getHeight());
		
		drawAxes();
		drawCircle();
		drawSine(gbl.angle);
		drawIndicator(gbl.angle);
		
		gbl.angle += .05;
		setTimeout(animate, 50);
	}

	function drawAxes(){
		// x轴，y轴终点
		var pt_x = [gbl.getSampleRange(), 0], pt_y = [0, 2];
		var pt_origin = gbl.getPt_origin();
		// 缩放，转换为canvas坐标
		var transResult_start = [[-2, 0], [0, -2]].map(zoom).map(v=>canvasCoord.transform(pt_origin, v));
		var transResult_end = [pt_x, pt_y].map(zoom).map(v=>canvasCoord.transform(pt_origin, v));

		// 绘制: 原点和x、y轴的终点连线
		var ctx = gbl.getCtx();
		ctx.beginPath();
		for(var i = 0; i < 2; i++){
			ctx.moveTo(transResult_start[i][0], transResult_start[i][1]);
			ctx.lineTo(transResult_end[i][0], transResult_end[i][1]);
		}
		ctx.stroke();
	}

	// f(x) = sin(x), g(x) = x + angle, 计算f(g(x))
	function drawSine(angle){
	　　// 根据采样范围，采样值，确定x轴样品集
		var sampleSet = sampleUtils.gatherSamples(gbl.getSampleRange(), gbl.getSampleCount());
		// 变换自变量，调用sine函数求出点集
		var pointSet = sampleSet.map(v=>[v, Math.sin(v + angle)]);
		// 缩放（等比放大）
		pointSet = pointSet.map(zoom);
		// 转换为canvas坐标系
		pointSet = pointSet.map(v=>canvasCoord.transform(gbl.getPt_origin(), v));
		
		// 绘制
		var pt_start = pointSet.shift();
		var ctx = gbl.getCtx();
		ctx.beginPath();
		ctx.moveTo(pt_start[0], pt_start[1]);
		pointSet.forEach(v=>ctx.lineTo(v[0], v[1]));
		ctx.stroke();
	}

	function drawCircle(){
		var ctx = gbl.getCtx();
		ctx.beginPath();
		var pt_origin = gbl.getPt_origin();
		ctx.arc(pt_origin[0], pt_origin[1], gbl.getZoomScale(), 0, Math.PI * 2, true);
		ctx.stroke();
	}

	function drawIndicator(angle){
		var pt_origin = gbl.getPt_origin();
		var endPoint = [Math.cos(angle), Math.sin(angle)];
		endPoint = canvasCoord.transform(pt_origin, zoom(endPoint));
		var ctx = gbl.getCtx();
		ctx.beginPath();
		ctx.moveTo(pt_origin[0], pt_origin[1]);
		ctx.lineTo(endPoint[0], endPoint[1]);
		ctx.stroke();

		drawDash(endPoint, [pt_origin[0], endPoint[1]]);
	}

	function drawDash(startPoint, endPoint){
		var delta_x = endPoint[0] - startPoint[0];
		var delta_y = endPoint[1] - startPoint[1];
		var dir = delta_x / Math.abs(delta_x);
		var r = Math.abs(delta_y) / Math.abs(delta_x);
		var d = 5 * dir;
		var count = Math.ceil(Math.abs(delta_x) / (2 * Math.abs(d)));
		var point_pairs = [];

		for(var i = 0; i < count - 1; i++){
			var p1 = 2 * i * d;
			var p2 = (2 * i + 1) * d;
			point_pairs.push([
				[p1 + startPoint[0], p1 * r + startPoint[1]], 
				[p2 + startPoint[0], p2 * r + startPoint[1]]
			]);
		}

		// 处理最后一段
		var i = count - 1;
		var p1 = 2 * i * d;
		var p2 = Math.min(Math.abs((2 * i + 1) * d), Math.abs(endPoint[0] - startPoint[0])) * dir;
		point_pairs.push([
			[p1 + startPoint[0], p1 * r + startPoint[1]], 
			[p2 + startPoint[0], p2 * r + startPoint[1]]
		]);

		// 绘制
		var ctx = gbl.getCtx();
		ctx.beginPath();
		point_pairs.forEach(function(point_pair){
			ctx.moveTo(point_pair[0][0], point_pair[0][1]);
			ctx.lineTo(point_pair[1][0], point_pair[1][1]);
		});
		ctx.stroke();
	}

	function zoom(point){
		return [point[0] * gbl.getZoomScale(), point[1] * gbl.getZoomScale()];
	}
});