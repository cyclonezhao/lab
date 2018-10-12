define(function (){
　　return {
		// 采样
		gatherSamples: function(sampleRange, sampleCount){
			var sampleSet = [];
			sampleSet.push(0);

			if(sampleCount > 0){
				var unitSample = sampleRange / (sampleCount + 1);
				for(var i = 1; i <= sampleCount; i++){
					sampleSet.push(unitSample * i);
				}
			}

			sampleSet.push(sampleRange);
			return sampleSet;
		}
　　};
});