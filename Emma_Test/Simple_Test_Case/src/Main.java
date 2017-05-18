
import search.BinarySearch;
import search.ISortedArraySearch;
import search.LinearSearch;

// ----------------------------------------------------------------------------
/**
 * A simple demo used by the sample build scripts in the examples directory.
 */
public class Main
{
    // public: ................................................................
    
    public static void main (final String [] args)
    {
        System.out.println ("main(): running doSearch()...");
        final int [] data = new int [100];
        for (int i = 0; i < 100; i++){
            data[i] = 2 * i;
        }

        ISortedArraySearch impl = new LinearSearch ();
        impl.find (data, 100);
        
        impl = new BinarySearch ();
        impl.find (data, 100);
        System.out.println ("main(): done");
    }
    
    /*public void doSearch ()
    {
        final int [] data = new int [] {0, 3, 5, 7, 9};

        ISortedArraySearch impl = new LinearSearch ();
        impl.find (data, 4);
        
        impl = new BinarySearch ();
        impl.find (data, 4);
    }*/
    
} // end of class
// ----------------------------------------------------------------------------