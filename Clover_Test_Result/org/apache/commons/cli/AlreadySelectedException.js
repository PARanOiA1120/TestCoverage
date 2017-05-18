var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":87,"id":0,"methods":[{"el":48,"sc":5,"sl":45},{"el":64,"sc":5,"sl":58},{"el":75,"sc":5,"sl":72},{"el":86,"sc":5,"sl":83}],"name":"AlreadySelectedException","sl":26}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_117":{"methods":[{"sl":45},{"sl":58},{"sl":72},{"sl":83}],"name":"testTwoLongOptionsFromGroup","pass":true,"statements":[{"sl":47},{"sl":60},{"sl":62},{"sl":63},{"sl":74},{"sl":85}]},"test_23":{"methods":[{"sl":45},{"sl":58},{"sl":72},{"sl":83}],"name":"testTwoOptionsFromGroup","pass":true,"statements":[{"sl":47},{"sl":60},{"sl":62},{"sl":63},{"sl":74},{"sl":85}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [23, 117], [], [23, 117], [], [], [], [], [], [], [], [], [], [], [23, 117], [], [23, 117], [], [23, 117], [23, 117], [], [], [], [], [], [], [], [], [23, 117], [], [23, 117], [], [], [], [], [], [], [], [], [23, 117], [], [23, 117], [], []]
