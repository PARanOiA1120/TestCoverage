package CustomProjectMaven;

/**
 * Created by arielxin on 5/18/17.
 */
public enum MultiplierEnum {
    DOUBLE(2.0),
    TRIPLE(3.0);

    private final double multiplier;

    // check constructor?
    MultiplierEnum(double multiplier) {
        this.multiplier = multiplier;
    }

    Double applyMultiplier(Double value) {
        return multiplier * value;
    }


}
