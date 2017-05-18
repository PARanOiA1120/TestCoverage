package CustomProjectMaven;

/**
 * Created by liyuanqi on 5/18/17.
 */
public class StaticInnerClass {

    public static int staticNestedClassAdd(int a, int b){

        InnerStaticNested nested = new InnerStaticNested();
        return nested.add(1,1);
    }

    //static nested class in java
    private static class InnerStaticNested {
        public int add(int a, int b){
            return a+b;
        }
    }
}
