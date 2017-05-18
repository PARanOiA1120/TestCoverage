package CustomProjectMaven;

import static org.junit.Assert.assertTrue;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by liyuanqi on 5/18/17.
 */
public class ChildSubstractionClassTest {
    @Test
    public void testParentClassMethodFromChildClass(){
        ChildSubstractionClass childClass = new ChildSubstractionClass();
        assertTrue(childClass.baseSubstract(2,1)==1);
    }
    @Test
    public void testChildClassMethodFromChildClass(){
        ChildSubstractionClass childClass = new ChildSubstractionClass();
        assertTrue(childClass.childSubstract(2,1)==1);
    }
}
