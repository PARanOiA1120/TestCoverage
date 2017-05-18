package CustomProjectMaven;

import static org.junit.Assert.assertTrue;
import org.junit.Test;

/**
 * Created by liyuanqi on 5/18/17.
 */
public class StaticInnerClassTest {
    @Test
    public void testStaticInnerClassMethod(){
        assertTrue(StaticInnerClass.staticNestedClassAdd(1,1)==2);
    }
}
