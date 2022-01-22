class Solution {
    public int[] countBits(int num) {
        int[] res = new int[num + 1];
        int next = 1;

        for (int i = 1; i <= num; i++) {
            if (i == next << 1)
                next <<= 1;

            res[i] = 1 + res[i - next];
        }

        return res;
    }
}