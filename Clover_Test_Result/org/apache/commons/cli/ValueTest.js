var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":194,"id":3273,"methods":[{"el":57,"sc":5,"sl":34},{"el":64,"sc":5,"sl":59},{"el":72,"sc":5,"sl":66},{"el":79,"sc":5,"sl":74},{"el":87,"sc":5,"sl":81},{"el":98,"sc":5,"sl":89},{"el":109,"sc":5,"sl":100},{"el":120,"sc":5,"sl":111},{"el":131,"sc":5,"sl":122},{"el":145,"sc":5,"sl":133},{"el":159,"sc":5,"sl":147},{"el":175,"sc":5,"sl":161},{"el":193,"sc":5,"sl":177}],"name":"ValueTest","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_10":{"methods":[{"sl":74}],"name":"testLongNoArg","pass":true,"statements":[{"sl":77},{"sl":78}]},"test_100":{"methods":[{"sl":89}],"name":"testShortOptionalArgNoValue","pass":true,"statements":[{"sl":92},{"sl":94},{"sl":95},{"sl":96},{"sl":97}]},"test_131":{"methods":[{"sl":81}],"name":"testLongWithArg","pass":true,"statements":[{"sl":84},{"sl":85},{"sl":86}]},"test_141":{"methods":[{"sl":147}],"name":"testLongOptionalArgValues","pass":true,"statements":[{"sl":150},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158}]},"test_163":{"methods":[{"sl":59}],"name":"testShortNoArg","pass":true,"statements":[{"sl":62},{"sl":63}]},"test_26":{"methods":[{"sl":111}],"name":"testLongOptionalNoValue","pass":true,"statements":[{"sl":114},{"sl":116},{"sl":117},{"sl":118},{"sl":119}]},"test_291":{"methods":[{"sl":161}],"name":"testShortOptionalNArgValues","pass":true,"statements":[{"sl":164},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174}]},"test_292":{"methods":[{"sl":133}],"name":"testShortOptionalArgValues","pass":true,"statements":[{"sl":136},{"sl":138},{"sl":139},{"sl":140},{"sl":141},{"sl":142},{"sl":143},{"sl":144}]},"test_309":{"methods":[{"sl":100}],"name":"testShortOptionalArgValue","pass":true,"statements":[{"sl":103},{"sl":105},{"sl":106},{"sl":107},{"sl":108}]},"test_314":{"methods":[{"sl":66}],"name":"testShortWithArg","pass":true,"statements":[{"sl":69},{"sl":70},{"sl":71}]},"test_4":{"methods":[{"sl":177}],"name":"testLongOptionalNArgValues","pass":true,"statements":[{"sl":180},{"sl":184},{"sl":186},{"sl":187},{"sl":188},{"sl":189},{"sl":190},{"sl":191},{"sl":192}]},"test_89":{"methods":[{"sl":122}],"name":"testLongOptionalArgValue","pass":true,"statements":[{"sl":125},{"sl":127},{"sl":128},{"sl":129},{"sl":130}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [163], [], [], [163], [163], [], [], [314], [], [], [314], [314], [314], [], [], [10], [], [], [10], [10], [], [], [131], [], [], [131], [131], [131], [], [], [100], [], [], [100], [], [100], [100], [100], [100], [], [], [309], [], [], [309], [], [309], [309], [309], [309], [], [], [26], [], [], [26], [], [26], [26], [26], [26], [], [], [89], [], [], [89], [], [89], [89], [89], [89], [], [], [292], [], [], [292], [], [292], [292], [292], [292], [292], [292], [292], [], [], [141], [], [], [141], [], [141], [141], [141], [141], [141], [141], [141], [], [], [291], [], [], [291], [], [291], [291], [291], [291], [291], [291], [291], [291], [291], [], [], [4], [], [], [4], [], [], [], [4], [], [4], [4], [4], [4], [4], [4], [4], [], []]
