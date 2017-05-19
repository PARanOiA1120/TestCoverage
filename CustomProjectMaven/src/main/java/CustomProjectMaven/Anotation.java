package CustomProjectMaven;
import java.lang.annotation.*;
/**
 * Created by Haotian on 18/05/2017.
 */
public class Anotation{
    @interface ClassPreamble {
        String author();
        String date();
        int currentRevision() default 1;
        String lastModified() default "N/A";
        String lastModifiedBy() default "N/A";
        String[] reviewers();
    }


    public void Generation3List() {

    }
}