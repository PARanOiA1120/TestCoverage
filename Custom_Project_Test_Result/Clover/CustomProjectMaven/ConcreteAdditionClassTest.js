var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":27,"id":168,"methods":[{"el":16,"sc":5,"sl":12},{"el":21,"sc":5,"sl":17},{"el":26,"sc":5,"sl":22}],"name":"ConcreteAdditionClassTest","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":22}],"name":"testInterfaceMethod","pass":true,"statements":[{"sl":24},{"sl":25}]},"test_15":{"methods":[{"sl":12}],"name":"testAbstractMethod","pass":true,"statements":[{"sl":14},{"sl":15}]},"test_21":{"methods":[{"sl":17}],"name":"testConcreteMethod","pass":true,"statements":[{"sl":19},{"sl":20}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [15], [], [15], [15], [], [21], [], [21], [21], [], [11], [], [11], [11], [], []]
