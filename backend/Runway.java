package backend;

public class Runway {
    private int aerodrome;
    private String designation;
    private int width;
    private int length;

    Runway(int aerodrome, String designation, int width, int length) {
        this.aerodrome = aerodrome;
        this.designation = designation;
        this.width = width;
        this.length = length;
    }

    public int getAerodrome() {
        return aerodrome;
    }

    public String getDesignation() {
        return designation;
    }

    public int getWidth() {
        return width;
    }

    public int getLength() {
        return length;
    }
}
