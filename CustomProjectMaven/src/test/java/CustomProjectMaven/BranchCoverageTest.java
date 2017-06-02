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

    @Test
    public void switchTest() {
        int result = new BranchCoverage().switchOperator(1);
        int result2 = new BranchCoverage().switchOperator(2);
        assertEquals(result, 1);
        assertEquals(result2, 2);

    }

    @Test
    public void orOperatorTest(){
        int result1 = new BranchCoverage().orOperator(1, 1);
        int result2 = new BranchCoverage().orOperator(-6, 0);
        int result3 = new BranchCoverage().orOperator(-1, -1);

        assertEquals(result1, 2);
        assertEquals(result2, -6);
        assertEquals(result3, -1);
    }

    @Test
    public void andOperation(){
        new BranchCoverage().andOperator(1,-1);
    }

    @Test
    public void oneLineIfTest(){
        new BranchCoverage().oneLineIf(-1);
    }
}