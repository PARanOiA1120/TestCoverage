var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":27,"id":137,"methods":[{"el":16,"sc":5,"sl":12},{"el":21,"sc":5,"sl":17},{"el":26,"sc":5,"sl":22}],"name":"ConcreteAdditionClassTest","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_2":{"methods":[{"sl":17}],"name":"testConcreteMethod","pass":true,"statements":[{"sl":19},{"sl":20}]},"test_5":{"methods":[{"sl":12}],"name":"testAbstractMethod","pass":true,"statements":[{"sl":14},{"sl":15}]},"test_8":{"methods":[{"sl":22}],"name":"testInterfaceMethod","pass":true,"statements":[{"sl":24},{"sl":25}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [5], [], [5], [5], [], [2], [], [2], [2], [], [8], [], [8], [8], [], []]
