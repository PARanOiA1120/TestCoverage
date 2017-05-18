package CustomProjectMaven;

/**
 * Created by liyuanqi on 5/18/17.
 */
public class ConcreteAdditionClass extends AbstractAdditionClass implements SimpleAdditionInterface{

    public int abstractAdditionMethod(int a, int b) {
        return a+b;
    }

    public int interfaceAdd(int a, int b) {
        return a + b;
    }
}
