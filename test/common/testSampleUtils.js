define(["../../common/sampleUtils"], function (sampleUtils) {
	return{
		test: function(assert){
			// 3, 1 -> [0, 3/2, 3]
			var ret = sampleUtils.gatherSamples(3, 1);
			assert.equal(ret.length, 3, "输入3, 1， 输出样品的数量");
			assert.equal(ret[0], 0, "输入3, 1， 输出首项");
			assert.equal(ret[1], 3/2, "输入3, 1， 输出中项");
			assert.equal(ret[2], 3, "输入3, 1， 输出末项");
		}
	};
});