package CustomProjectMaven;

/**
 * Created by vinc on 18/05/2017.
 */
public class ExceptionClassA extends Exception{
    public ExceptionClassA(String message){
        super(message);
        System.out.println("Exception A");
    }

    public ExceptionClassA(String message, Throwable throwable) {
        super(message, throwable);
        System.out.println("Exception A");
    }
}
