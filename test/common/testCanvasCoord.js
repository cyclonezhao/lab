define(["../../common/canvasCoord"], function (canvasCoord) {
	return{
		test: function(assert){
			// x = origin[0] + point[0]
			// y = origin[1] - point[1]
			var ret = canvasCoord.transform([0,0], [1,1]);
			assert.equal(1, ret[0], "转换后的x轴值");
			assert.equal(-1, ret[1], "转换后的y轴值");
		}
	};
});