class Solution {
    public int brokenCalc(int X, int Y) {
        int ops = 0;
        while (X < Y) {
            Y = Y % 2 == 0 ? Y >> 1 : Y + 1;
            ops++;
        }
        return ops + X - Y;
    }
}