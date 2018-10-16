define(function (){
	return {
		drawLine: function(p1, p2, color){
			if(!color) color="black";
			var panel = document.getElementById( "panel" );
		    var line = document.createElementNS( "http://www.w3.org/2000/svg", "line" );
		    line.setAttribute( "x1", p1.x );
		    line.setAttribute( "y1", p1.y );
		    line.setAttribute( "x2", p2.x );
		    line.setAttribute( "y2", p2.y );
		    line.setAttribute( "style", "stroke-width:1;stroke:" + color );
		    panel.appendChild( line );
		},

		drawPolyline: function(pointSet, color){
			if(!color) color="black";
			var panel = document.getElementById( "panel" );
		    var points = pointSet.map(v=>v.x+","+v.y).join(" ");
		    var polyline = document.createElementNS( "http://www.w3.org/2000/svg", "polyline" );
		    polyline.setAttribute( "points", points );
		    polyline.setAttribute( "style", "fill:none;stroke-width:1;stroke:" + color );
		    panel.appendChild( polyline );
		},

		drawPoint: function(p, color){
			if(!color) color="black";
			var panel = document.getElementById( "panel" );
		    var circle = document.createElementNS( "http://www.w3.org/2000/svg", "circle" );
		    circle.setAttribute( "cx", p.x );
		    circle.setAttribute( "cy", p.y );
		    circle.setAttribute( "r", 2 );
		    circle.setAttribute( "style", "fill:" + color );
		    panel.appendChild( circle );
		},
		drawText: function(p, txt, fontSize, color){
			if(!color) color="black";
			if(!fontSize) color=12;
			var panel = document.getElementById( "panel" );
		    var text = document.createElementNS( "http://www.w3.org/2000/svg", "text" );
		    text.setAttribute("x", p.x);
		    text.setAttribute("y", p.y);
		    text.setAttribute("fill", color);
		    text.setAttribute("font-size", fontSize);
		    text.innerHTML = txt;
		    panel.appendChild( text );
		},

		setWidth: function(width){
			var panel = document.getElementById( "panel" );
			panel.setAttribute("width", width);
		},
		setHeight: function(height){
			var panel = document.getElementById( "panel" );
			panel.setAttribute("height", height);
		},
	};
});