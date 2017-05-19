package CustomProjectMaven;

/**
 * Created by vinc on 18/05/2017.
 */
public class ExceptionClassB extends Exception {
    public ExceptionClassB(String message){
        super(message);
        System.out.println("Exception B");
    }

    public ExceptionClassB(String message, Throwable throwable) {
        super(message, throwable);
        System.out.println("Exception B");
    }
}
