import static org.junit.Assert.*;
import org.junit.Test;

/**
 * Created by arielxin on 5/16/17.
 */
public class SimpleTest {

    @Test
    // divide 0 exception doesn't get checked
    public void divideTest() {
        int result = new Simple().divide(5, 2);
        assertEquals(2, result);
    }

    @Test
    // check if the coverage of "break" gets checked
    public void loopTermConditionTest() {
        new Simple().stopAtN(7);
    }
}