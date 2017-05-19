package CustomProjectMaven;

import java.util.Arrays;
import java.util.Comparator;

/**
 * Created by vinc on 18/05/2017.
 */
public class AnonymousFunction {

    public String sort() {
        String[] arr = {"aaaaa", "ccc", "dddd", "bb"};
        Arrays.sort(arr, new Comparator<String>() {
            public int compare(String s1, String s2) {
                return s1.length() - s2.length();
            }
        });

        return arr[1];
    }
}
