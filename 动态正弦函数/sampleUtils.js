define(function (){
　　return {
		sample: function(sampleRange, sampleCount){
			var sampleSet = [];
			var unitSample = sampleRange;
			if(sampleCount > 1){
				unitSample = sampleRange / (sampleCount - 1)
			}
			for(var i = 0; i < sampleCount; i++){
				sampleSet.push(unitSample * i);
			}

			var last = sampleSet.pop();
			sampleSet.push(sampleRange);
			return sampleSet;
		},
		calculate: function(sampleSet, fn){
			var pointSet = [];
			var count = sampleSet.length;
			for(var i = 0; i < count; i++){
				pointSet.push([sampleSet[i], fn.call(this, sampleSet[i])]);
			}
			return pointSet;

		},
		zoom: function(pointSet, scale){
			var newPointSet = [];
			var count = pointSet.length;
			for(var i = 0; i < count; i++){
				newPointSet.push([pointSet[i][0] * scale, pointSet[i][1] * scale]);
			}
			return newPointSet;
		},
		translate: function(pointSet, offset){
			var newPointSet = [];
			var count = pointSet.length;
			for(var i = 0; i < count; i++){
				newPointSet.push([pointSet[i][0] + offset[0], pointSet[i][1] + offset[1]]);
			}
			return newPointSet;
		}
　　};
});