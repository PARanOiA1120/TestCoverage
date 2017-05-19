package CustomProjectMaven;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by vinc on 18/05/2017.
 */
public class AnonymousFunctionTest {
    @Test
    public void AnonymousTest() {
        AnonymousFunction anonymousFunction = new AnonymousFunction();
        String result = anonymousFunction.sort();
        assertEquals("ccc", result);
    }
}