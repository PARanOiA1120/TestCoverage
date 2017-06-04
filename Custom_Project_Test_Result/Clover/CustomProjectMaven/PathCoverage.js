var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":81,"methods":[{"el":21,"sc":5,"sl":7}],"name":"PathCoverage","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":7}],"name":"pathCheckerTest","pass":true,"statements":[{"sl":8},{"sl":9},{"sl":10},{"sl":12},{"sl":15},{"sl":16},{"sl":18},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [1], [1], [1], [1], [], [1], [], [], [1], [1], [], [1], [], [1], [], []]
