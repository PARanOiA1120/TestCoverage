var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":24,"id":10,"methods":[{"el":15,"sc":5,"sl":9},{"el":22,"sc":5,"sl":17}],"name":"BranchCoverage","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_17":{"methods":[{"sl":9}],"name":"testStringUtil","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":14}]},"test_6":{"methods":[{"sl":17}],"name":"mathCheckerTest","pass":true,"statements":[{"sl":18},{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [17], [17], [17], [17], [], [17], [], [], [6], [6], [], [], [6], [], [], []]
