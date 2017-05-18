package CustomProjectMaven;

/**
 * Created by liyuanqi on 5/18/17.
 */
public abstract class AbstractAdditionClass {
    public abstract int abstractAdditionMethod(int a, int b);

    public int concreteAdditionMethod(int a, int b){
        return a+b;
    }
}