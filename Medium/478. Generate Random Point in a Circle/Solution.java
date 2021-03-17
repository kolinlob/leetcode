class Solution {
    private final double r;
    private final double x;
    private final double y;

    public Solution(double radius, double x_center, double y_center) {
        r = radius;
        x = x_center;
        y = y_center;
    }

    public double[] randPoint() {
        double angle = 2 * Math.PI * Math.random();
        double dist = Math.sqrt(Math.random()) * r;

        double opp = Math.sin(angle) * dist;
        double adj = Math.cos(angle) * dist;

        return new double[] { x + adj, y + opp };
    }
}