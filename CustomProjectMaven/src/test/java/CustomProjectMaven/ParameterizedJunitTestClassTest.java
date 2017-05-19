package CustomProjectMaven;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.Collection;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

/**
 * Created by liyuanqi on 5/18/17.
 */
@RunWith(Parameterized.class)
public class ParameterizedJunitTestClassTest {

        @Parameters
        public static Collection<Object[]> data() {
            return Arrays.asList(new Object[][] {{ 6, 8 }});
        }

        private int fInput;

        private int fExpected;

        public ParameterizedJunitTestClassTest(int input, int expected) {
            fInput= input;
            fExpected= expected;
        }

        @Test
        public void test() {
            assertEquals(fExpected, ParameterizedJunitTestClass.compute(fInput));
        }

}