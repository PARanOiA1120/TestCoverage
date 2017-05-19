package CustomProjectMaven;

import org.junit.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by Zhengliang Wu on 5/18/17.
 */
public class CollectionTest {
    @Test
    public void multiplyThree() throws Exception {
        ArrayList<Integer> input = new ArrayList<>();
        List<Integer> benchmark = new ArrayList<>();
        for(int i=0;i<5;i++){
            input.add(new Integer(i));
            benchmark.add(new Integer(i*3));
        }
        ArrayList<Integer> result = (ArrayList)(new Collection()).multiplyThree(input);

        assertTrue(result.equals(benchmark));
    }

}