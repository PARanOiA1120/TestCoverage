package CustomProjectMaven;

/**
 * Created by vinc on 18/05/2017.
 */
public class UseExceptionClass {
    public UseExceptionClass(String type) throws ExceptionClassA, ExceptionClassB
    {
        if(type.equals("A")){
            throw new ExceptionClassA("Throw ExceptionA");
		}
        else if(type.equals("B"))
            throw new ExceptionClassB("Throw ExceptionB");
    }
}
