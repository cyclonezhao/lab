define(function (){
　　return {
		// 采样
		gatherSamples: function(sampleRange, sampleCount){
			var sampleSet = [];
			var unitSample = sampleRange;
			if(sampleCount > 1){
				unitSample = sampleRange / (sampleCount - 1)
			}
			for(var i = 0; i < sampleCount; i++){
				sampleSet.push(unitSample * i);
			}

			// 消除精度问题，最后一个样品值强制等于采样区间的上界
			var last = sampleSet.pop();
			sampleSet.push(sampleRange);
			return sampleSet;
		}
　　};
});