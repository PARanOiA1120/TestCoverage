package CustomProjectMaven;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by Zhengliang Wu on 5/18/17.
 */
public class Collection {

    // test lamda expression.
    public List<Integer> multiplyThree(ArrayList<Integer> input_list){
        return input_list.stream().map(i -> i*3).collect(Collectors.toList());
    }
}
