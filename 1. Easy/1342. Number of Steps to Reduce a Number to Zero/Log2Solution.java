class Solution {
    public int numberOfSteps(int num) {
        return num == 0 ? 0 : (int) (Math.log(num) / Math.log(2)) + Integer.bitCount(num);
    }
}