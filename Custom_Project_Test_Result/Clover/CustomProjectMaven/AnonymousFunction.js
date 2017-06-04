var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":21,"id":2,"methods":[{"el":16,"sc":13,"sl":14},{"el":20,"sc":5,"sl":11}],"name":"AnonymousFunction","sl":9}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_4":{"methods":[{"sl":11},{"sl":14}],"name":"AnonymousTest","pass":true,"statements":[{"sl":12},{"sl":13},{"sl":15},{"sl":19}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [4], [4], [4], [4], [4], [], [], [], [4], [], []]
