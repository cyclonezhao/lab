define(function(){
	return {
		// 将逻辑坐标点转换成canvas坐标点
		transform: function(origin, point){
			return [
					origin[0] + point[0],
					origin[1] - point[1]
				];
		}
	};
});