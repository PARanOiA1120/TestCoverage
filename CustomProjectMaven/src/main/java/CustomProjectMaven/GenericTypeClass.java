package CustomProjectMaven;

/**
 * Created by liyuanqi on 5/18/17.
 */
public class GenericTypeClass<T> {
    public String concatString(T a, T b){
        return a.toString() + b.toString();
    }
}
