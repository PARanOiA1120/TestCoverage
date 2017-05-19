var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":10,"methods":[{"el":15,"sc":5,"sl":9},{"el":22,"sc":5,"sl":17},{"el":29,"sc":5,"sl":26}],"name":"BranchCoverage","sl":7}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_3":{"methods":[{"sl":9}],"name":"testStringUtil","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12},{"sl":14}]},"test_5":{"methods":[{"sl":17}],"name":"mathCheckerTest","pass":true,"statements":[{"sl":18},{"sl":21}]},"test_8":{"methods":[{"sl":26}],"name":"ternaryOperator","pass":true,"statements":[{"sl":27},{"sl":28}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [3], [3], [3], [3], [], [3], [], [], [5], [5], [], [], [5], [], [], [], [], [8], [8], [8], [], [], []]
