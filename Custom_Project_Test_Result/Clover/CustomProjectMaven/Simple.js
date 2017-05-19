var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":17,"id":84,"methods":[{"el":9,"sc":5,"sl":7},{"el":16,"sc":5,"sl":11}],"name":"Simple","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_19":{"methods":[{"sl":7}],"name":"divideTest","pass":true,"statements":[{"sl":8}]},"test_20":{"methods":[{"sl":7},{"sl":11}],"name":"loopTermConditionTest","pass":true,"statements":[{"sl":8},{"sl":12},{"sl":13}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [19, 20], [19, 20], [], [], [20], [20], [20], [], [], [], []]
