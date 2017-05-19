var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":33,"id":30,"methods":[{"el":16,"sc":5,"sl":14},{"el":32,"sc":5,"sl":18}],"name":"Collection","sl":11}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1":{"methods":[{"sl":18}],"name":"blockMap","pass":true,"statements":[{"sl":19},{"sl":20},{"sl":21},{"sl":22},{"sl":23},{"sl":24},{"sl":26},{"sl":27},{"sl":30}]},"test_11":{"methods":[{"sl":14}],"name":"multiplyThree","pass":true,"statements":[{"sl":15}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [11], [11], [], [], [1], [1], [1], [1], [1], [1], [1], [], [1], [1], [], [], [1], [], [], []]
