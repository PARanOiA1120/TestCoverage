var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":20,"id":94,"methods":[{"el":12,"sc":5,"sl":8}],"name":"StaticInnerClass","sl":6},{"el":19,"id":97,"methods":[{"el":18,"sc":9,"sl":16}],"name":"StaticInnerClass.InnerStaticNested","sl":15}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":8},{"sl":16}],"name":"testStaticInnerClassMethod","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":17}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [1], [], [1], [1], [], [], [], [], [1], [1], [], [], []]
