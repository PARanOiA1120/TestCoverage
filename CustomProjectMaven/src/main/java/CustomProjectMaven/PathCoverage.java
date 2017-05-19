package CustomProjectMaven;

/**
 * Created by arielxin on 5/18/17.
 */
public class PathCoverage {
    public Boolean fourPaths (boolean A, boolean B){
        Boolean result = false;
        if(A){
            result = true;
        } else {
            result = false;
        }

        if(B) {
            result = true;
        } else {
            result = false;
        }
        return result;
    }
}
