package CustomProjectMaven;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by Haotian 18/05/2017.
 */
public class AnotationTest {
    @Test
    public void AnotationTest() {
        @ClassPreamble (
                author = "John Doe",
                date = "3/17/2002",
                currentRevision = 6,
                lastModified = "4/12/2004",
                lastModifiedBy = "Jane Doe",
                reviewers = {"Alice", "Bob", "Cindy"}
        )
        public void HelloWord() {
            String a = "ccc";
            assertEquals("ccc", result);
        }
    }
}
