package CustomProjectMaven;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import static org.junit.Assert.*;

/**
 * Created by vinc on 18/05/2017.
 */
public class UseExceptionClassTest {
    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Test
    public void ExceptionTest()throws ExceptionClassA, ExceptionClassB{
        thrown.expect(ExceptionClassA.class);
        thrown.expectMessage("A");
        UseExceptionClass useExceptionClass = new UseExceptionClass("A");
    }
}