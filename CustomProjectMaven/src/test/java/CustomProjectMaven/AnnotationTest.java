package CustomProjectMaven;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by Haotian 18/05/2017.
 */
public class AnnotationTest {
    @Test
    public void AnnotationTest() {
        @Annotation.ClassPreamble (
                author = "John Doe",
                date = "3/17/2002",
                currentRevision = 6,
                lastModified = "4/12/2004",
                lastModifiedBy = "Jane Doe",
                reviewers = {"Alice", "Bob", "Cindy"}
        )

        String a = "ccc";
        assertEquals("ccc", a);
    }
}
