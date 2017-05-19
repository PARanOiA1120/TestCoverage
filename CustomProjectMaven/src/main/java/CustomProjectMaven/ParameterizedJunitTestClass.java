package CustomProjectMaven;

/**
 * Created by liyuanqi on 5/18/17. referenced from: https://github.com/junit-team/junit4/wiki/parameterized-tests
 */
public class ParameterizedJunitTestClass {
    public static int compute(int n) {
        int result = 0;

        if (n <= 1) {
            result = n;
        } else {
            result = compute(n - 1) + compute(n - 2);
        }

        return result;
    }
}
