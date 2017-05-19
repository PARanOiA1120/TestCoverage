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



    public Boolean ternaryOperator (boolean A, boolean B){
        boolean result = A?B:false;
        return result;
    }

}
