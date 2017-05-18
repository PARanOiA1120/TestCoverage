package CustomProjectMaven;

import static org.junit.Assert.assertTrue;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by liyuanqi on 5/18/17.
 */
public class ConcreteAdditionClassTest {
    @Test
    public void testAbstractMethod(){
        ConcreteAdditionClass targetClass = new ConcreteAdditionClass();
        assertTrue(targetClass.abstractAdditionMethod(1,1)==2);
    }
    @Test
    public void testConcreteMethod(){
        ConcreteAdditionClass targetClass = new ConcreteAdditionClass();
        assertTrue(targetClass.concreteAdditionMethod(1,1)==2);
    }
    @Test
    public void testInterfaceMethod(){
        ConcreteAdditionClass targetClass = new ConcreteAdditionClass();
        assertTrue(targetClass.interfaceAdd(1,1)==2);
    }
}
