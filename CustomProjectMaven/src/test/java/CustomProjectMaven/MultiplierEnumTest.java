package CustomProjectMaven;
import com.sun.org.apache.xpath.internal.operations.Mult;
import org.junit.Test;
import static org.junit.Assert.*;


/**
 * Created by arielxin on 5/18/17.
 */
public class MultiplierEnumTest {
    @Test
    public void multiplierTest(){
        assertEquals(MultiplierEnum.DOUBLE.applyMultiplier(1.0), 2.0, 0.1);
        assertEquals(MultiplierEnum.TRIPLE.applyMultiplier(1.0), 3.0, 0.1);
    }
}