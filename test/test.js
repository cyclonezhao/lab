QUnit.start();
runTest("test canvasCoord", "common/testCanvasCoord");
runTest("test sampleUtils", "common/testSampleUtils");

// 要求 testModuleName 必须对外提供test(assert)方法，里头实现具体的测试逻辑
function runTest(name, testModuleName){
	QUnit.test(name, function(assert) {
		var done = assert.async();
		require([testModuleName], function (testModule) {
			testModule.test(assert);
			done();
		});
	});
}