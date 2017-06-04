var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":32,"id":132,"methods":[{"el":15,"sc":5,"sl":11},{"el":22,"sc":5,"sl":17},{"el":29,"sc":5,"sl":24}],"name":"BranchCoverageTest","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":11}],"name":"ternaryOperator","pass":true,"statements":[{"sl":13}]},"test_20":{"methods":[{"sl":17}],"name":"mathCheckerTest","pass":true,"statements":[{"sl":20},{"sl":21}]},"test_3":{"methods":[{"sl":24}],"name":"testStringUtil","pass":true,"statements":[{"sl":27},{"sl":28}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [0], [], [0], [], [], [], [20], [], [], [20], [20], [], [], [3], [], [], [3], [3], [], [], [], []]
