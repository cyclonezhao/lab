define(function (){
	return {
		drawLine: function(p1, p2){
			var panel = document.getElementById( "panel" );
		    var line = document.createElementNS( "http://www.w3.org/2000/svg", "line" );
		    line.setAttribute( "x1", p1.x );
		    line.setAttribute( "y1", p1.y );
		    line.setAttribute( "x2", p2.x );
		    line.setAttribute( "y2", p2.y );
		    line.setAttribute( "style", "stroke-width:1;stroke:rgb(0,0,0)" );
		    panel.appendChild( line );
		},

		drawPoint: function(p){
			var panel = document.getElementById( "panel" );
		    var circle = document.createElementNS( "http://www.w3.org/2000/svg", "circle" );
		    circle.setAttribute( "cx", p.x );
		    circle.setAttribute( "cy", p.y );
		    circle.setAttribute( "r", 3 );
		    circle.setAttribute( "style", "fill:rgb(0,0,0)" );
		    panel.appendChild( circle );
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