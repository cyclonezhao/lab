define(["graph"], function (graph){
	// --------------  全局配置  --------------
	var width = 800;
	var height = 600;
	var padding = 3; // 内边距
	var unit = 10; // 单位长度

	var origin = {x:400, y:300};

	// --------------  私有方法  --------------
	function drawAxis(){
		var x_left = {x: padding, y: origin.y};
		var x_right = {x: width - padding, y: origin.y};
		var y_top = {x: origin.x, y: padding};
		var y_bottom = {x: origin.x, y: height-padding};
		graph.drawLine(x_left, x_right);
		graph.drawLine(y_top, y_bottom);
	}

	function zoom(p){
		return {
			x: p.x * unit, 
			y: p.y * unit
		};
	}

	function translate(p){
		return {
			x: origin.x+p.x, 
			y: origin.y-p.y
		};
	}

	return {
		init: function(cfg){
			if(cfg){
				if(cfg.width) {
					width = cfg.width;
					graph.setWidth(width);
				}
				if(cfg.height) {
					height = cfg.height;
					graph.setHeight(height);
				}
				if(cfg.unit) unit = cfg.unit;
				if(cfg.origin) origin = cfg.origin;
			}

			drawAxis();
		},
		drawLine: function(p1, p2){
			var pointSet = [p1, p2].map(zoom).map(translate);
			graph.drawLine(pointSet[0], pointSet[1]);
		},
		drawPoint: function(p){
			p= translate(zoom(p));
			graph.drawPoint(p);
		}
	};
});