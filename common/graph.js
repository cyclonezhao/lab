define(function(){
	return {
		// 将逻辑坐标点转换成canvas坐标点
		zoom: function(point, scale){
			return [
					point[0] * scale[0],
					point[1] * scale[1]
				];
		}
	};
});