var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":26,"id":0,"methods":[{"el":14,"sc":5,"sl":10},{"el":19,"sc":5,"sl":15},{"el":25,"sc":5,"sl":21}],"name":"App","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_0":{"methods":[{"sl":10},{"sl":15},{"sl":21}],"name":"testDummyMethod1","pass":true,"statements":[{"sl":11},{"sl":12},{"sl":13},{"sl":16},{"sl":17},{"sl":18},{"sl":22},{"sl":23},{"sl":24}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [0], [0], [0], [0], [], [0], [0], [0], [0], [], [], [0], [0], [0], [0], [], []]
