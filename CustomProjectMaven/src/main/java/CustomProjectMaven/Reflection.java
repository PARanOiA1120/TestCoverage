/**
 * Created by vinc on 18/05/2017.
 */
public class Reflection {
    private int counter;
    public boolean setCounter(int counter){
        this.counter = counter;
        System.out.println("setCounter() set counter to : " + counter);
        return true;
    }
    public int getCounter() {
        System.out.println("getCounter() this.counter: " + this.counter);
        return this.counter;
    }

}
