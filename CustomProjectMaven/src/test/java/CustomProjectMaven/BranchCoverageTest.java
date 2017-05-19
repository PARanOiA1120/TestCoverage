package CustomProjectMaven;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by liyuanqi on 5/18/17.
 */
public class BranchCoverageTest {
    @Test
    public void ternaryOperator() throws Exception {
        assertTrue(new BranchCoverage().ternaryOperator(true,true));
//        assertTrue(!new BranchCoverage().ternaryOperator(false,false));
    }

    @Test
    // [Basic]: check if the tool support branch coverage
    public void mathCheckerTest() {
        Boolean result = new BranchCoverage().isOdd(10);
        assertEquals(false, result);
    }

    @Test
    // [Tricky]: test coverage shows 100%, should be 50% since we haven't tested on false for the first param
    public void testStringUtil() {
        String result = new BranchCoverage().concat(true, "Hello ", "World");
        assertEquals("hello world", result);
    }


}