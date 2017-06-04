var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":15,"id":44,"methods":[{"el":10,"sc":5,"sl":8},{"el":14,"sc":5,"sl":12}],"name":"ConcreteAdditionClass","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":12}],"name":"testInterfaceMethod","pass":true,"statements":[{"sl":13}]},"test_15":{"methods":[{"sl":8}],"name":"testAbstractMethod","pass":true,"statements":[{"sl":9}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [15], [15], [], [], [11], [11], [], []]
