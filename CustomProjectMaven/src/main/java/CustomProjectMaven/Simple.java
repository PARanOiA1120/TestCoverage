package CustomProjectMaven;

/**
 * Created by liyuanqi on 5/18/17.
 */
public class Simple {
    public int divide(int a, int b) {
        return a/b;
    }

    public void stopAtN(int n){
        for(int i=0; i<n; i++){
            if(i == 0)
                break;
            System.out.println("This line will not execute");
        }
    }
}
