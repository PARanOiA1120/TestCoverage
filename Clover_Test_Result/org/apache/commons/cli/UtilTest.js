var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":45,"id":3262,"methods":[{"el":34,"sc":5,"sl":27},{"el":44,"sc":5,"sl":36}],"name":"UtilTest","sl":25}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_111":{"methods":[{"sl":36}],"name":"testStripLeadingAndTrailingQuotes","pass":true,"statements":[{"sl":39},{"sl":40},{"sl":41},{"sl":42},{"sl":43}]},"test_130":{"methods":[{"sl":27}],"name":"testStripLeadingHyphens","pass":true,"statements":[{"sl":30},{"sl":31},{"sl":32},{"sl":33}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [130], [], [], [130], [130], [130], [130], [], [], [111], [], [], [111], [111], [111], [111], [111], [], []]
