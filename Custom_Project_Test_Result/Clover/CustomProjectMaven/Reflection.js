var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":17,"id":77,"methods":[{"el":11,"sc":5,"sl":7},{"el":15,"sc":5,"sl":12}],"name":"Reflection","sl":5}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_4":{"methods":[{"sl":7},{"sl":12}],"name":"CounterTest","pass":true,"statements":[{"sl":8},{"sl":9},{"sl":10},{"sl":13},{"sl":14}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [4], [4], [4], [4], [], [4], [4], [4], [], [], []]
