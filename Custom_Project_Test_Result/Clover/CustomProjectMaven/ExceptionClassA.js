var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":16,"id":55,"methods":[{"el":10,"sc":5,"sl":7},{"el":15,"sc":5,"sl":12}],"name":"ExceptionClassA","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_23":{"methods":[{"sl":7}],"name":"ExceptionTest","pass":false,"statements":[{"sl":8},{"sl":9}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [23], [23], [23], [], [], [], [], [], [], []]
