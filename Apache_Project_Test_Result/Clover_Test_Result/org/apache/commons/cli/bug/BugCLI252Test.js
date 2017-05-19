var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":46,"id":3561,"methods":[{"el":32,"sc":5,"sl":29},{"el":37,"sc":5,"sl":34},{"el":44,"sc":5,"sl":39}],"name":"BugCLI252Test","sl":27}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_151":{"methods":[{"sl":29},{"sl":39}],"name":"testExactOptionNameMatch","pass":true,"statements":[{"sl":31},{"sl":40},{"sl":41},{"sl":42},{"sl":43}]},"test_251":{"methods":[{"sl":34},{"sl":39}],"name":"testAmbiquousOptionName","pass":true,"statements":[{"sl":36},{"sl":40},{"sl":41},{"sl":42},{"sl":43}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [151], [], [151], [], [], [251], [], [251], [], [], [251, 151], [251, 151], [251, 151], [251, 151], [251, 151], [], [], []]
