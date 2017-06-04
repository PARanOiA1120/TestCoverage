var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":22,"id":140,"methods":[{"el":16,"sc":5,"sl":12},{"el":21,"sc":5,"sl":17}],"name":"ChildSubstractionClassTest","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":17}],"name":"testChildClassMethodFromChildClass","pass":true,"statements":[{"sl":19},{"sl":20}]},"test_19":{"methods":[{"sl":12}],"name":"testParentClassMethodFromChildClass","pass":true,"statements":[{"sl":14},{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [19], [], [19], [19], [], [10], [], [10], [10], [], []]
