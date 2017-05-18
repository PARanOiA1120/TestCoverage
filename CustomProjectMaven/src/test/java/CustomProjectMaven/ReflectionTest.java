import java.lang.reflect.Method;

import static org.junit.Assert.*;

/**
 * Created by vinc on 18/05/2017.
 */
public class ReflectionTest {
    @org.junit.Test
    public void CounterTest() throws Exception {
        Class cls = Class.forName("Reflection");
        Object obj = cls.newInstance();
        Method method = cls.getMethod("setCounter", int.class);
        Object result = method.invoke(obj, 100);
        assertEquals(true, result);

        method = cls.getMethod("getCounter");
        result = method.invoke(obj);
        assertEquals(100, result);
    }

}