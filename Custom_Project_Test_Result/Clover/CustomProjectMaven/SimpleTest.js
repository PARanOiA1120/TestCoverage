var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":23,"id":209,"methods":[{"el":16,"sc":5,"sl":11},{"el":22,"sc":5,"sl":18}],"name":"SimpleTest","sl":10}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_16":{"methods":[{"sl":11}],"name":"divideTest","pass":true,"statements":[{"sl":14},{"sl":15}]},"test_6":{"methods":[{"sl":18}],"name":"loopTermConditionTest","pass":true,"statements":[{"sl":21}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [16], [], [], [16], [16], [], [], [6], [], [], [6], [], []]
