package CustomProjectMaven;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 * Created by arielxin on 5/18/17.
 */
public class DirectionEnumTest {
    @Test
    public void directionTest(){
        assertNotNull(DirectionEnum.NORTH);
        assertEquals(DirectionEnum.WEST.getOppositeDirection(), DirectionEnum.EAST);
    }

}