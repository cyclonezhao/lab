define(["../../common/sampleUtils"], function (sampleUtils) {
	return{
		test: function(assert){
			// 3, 1 -> [0,3]
			var ret = sampleUtils.gatherSamples(3, 1);
			assert.equal(ret.length, 1, "输入3, 1， 输出样品的数量");
			assert.equal(ret[0], 3, "输入3, 1， 输出末项");
			// 3, 2 -> [0, ?, 3]
			ret = sampleUtils.gatherSamples(3, 2);
			assert.equal(ret.length, 2, "输入3, 2， 输出样品的数量");
			assert.equal(ret[0], 0, "输入3, 2， 输出首项");
			assert.equal(ret[1], 3, "输入3, 2， 输出末项");
			// 4, 3 -> [0, ?, ?, 4]
			ret = sampleUtils.gatherSamples(4, 3);
			assert.equal(ret.length, 3, "输入4, 3， 输出样品的数量");
			assert.equal(ret[0], 0, "输入4, 3， 输出首项");
			assert.equal(ret[2], 4, "输入4, 3， 输出末项");
		}
	};
});