package CustomProjectMaven;

import apple.laf.JRSUIConstants;

/**
 * Created by arielxin on 5/18/17.
 */
public enum DirectionEnum {
    EAST,
    SOUTH,
    WEST,
    NORTH;

    private DirectionEnum opposite;

    static {
        EAST.opposite = WEST;
        SOUTH.opposite = NORTH;
        WEST.opposite = EAST;
        NORTH.opposite = SOUTH;
    }

    public DirectionEnum getOppositeDirection(){
        return opposite;
    }


}
