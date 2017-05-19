package CustomProjectMaven;

/**
 * Hello world!
 *
 */
public class BranchCoverage
{
    public String concat(boolean append, String a,String b) {
        String result = null;
        if (append) {
            result = a + b;
        }
        return result.toLowerCase();
    }

    public Boolean isOdd(int n) {
        if (n%2 != 0)
            return true;
        else
            return false;
    }

    public Boolean twoPaths (boolean A, boolean B){
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

    public Boolean ternaryOperator (boolean A, boolean B){
        boolean result = A?B:false;
        return result;
    }

}
