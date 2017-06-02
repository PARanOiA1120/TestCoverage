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

    public int switchOperator (int c){
        int result = 0;
        switch (c) {
            case 1:
                result = 1;
                break;
            case 2:
                result = 2;
                break;
            default:
                result = 3;
        }

        return result;
    }

    public int orOperator (int x, int y){
        if(x > 0 || y > 0){
            return x+y;
        }
        else if (x < -5){
            return x;
        }
        return y;
    }

    public void andOperator(int x, int y){
        if(x > 0 && y > 0){
            System.out.println("x and y are both greater than 0");
        }
    }

    public void oneLineIf(int x){
        if(x > 0) System.out.println("x is greater than 0");
    }
}
