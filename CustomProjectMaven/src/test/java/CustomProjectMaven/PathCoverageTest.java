package CustomProjectMaven;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by arielxin on 5/18/17.
 */
public class PathCoverageTest {
    @Test
    // [Tricky]: gives 100% test coverage, but doesn't checked all path
    public void pathCheckerTest() {
        Boolean result1 = new PathCoverage().fourPaths(true, true);
        Boolean result2 = new PathCoverage().fourPaths(false, false);
        assertEquals(true, result1);
        assertEquals(false, result2);
    }

}