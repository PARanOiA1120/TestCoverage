package CustomProjectMaven;

import static org.junit.Assert.assertTrue;
import org.junit.Test;

/**
 * Created by liyuanqi on 5/18/17.
 */
public class GenericTypeClassTest {
    @Test
    public void testGenericTypeClass(){
        GenericTypeClass<String> pClass = new GenericTypeClass<String>();
        assertTrue(pClass.concatString("A","B").equals("AB"));
    }
}
