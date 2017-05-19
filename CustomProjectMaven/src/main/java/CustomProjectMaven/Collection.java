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

    public List<Integer> blockMap(ArrayList<Integer> input_list){
        return input_list.stream().map(i -> {
            Integer magicNumber = 0;
            Integer anotherMagicNumber = 0;
            if(i < 2){
                magicNumber = 42;
                anotherMagicNumber = 998;
            }else{
                magicNumber = 1;
                anotherMagicNumber = 1;
            }

            return i*magicNumber+anotherMagicNumber;
        }).collect(Collectors.toList());
    }
}
