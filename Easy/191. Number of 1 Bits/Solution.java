public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int bits = 0;

        for (int b = 0; b < 32; b++)
            if ((n >> (31 - b) & 1) == 1)
                bits++;

        return bits;
    }
}
