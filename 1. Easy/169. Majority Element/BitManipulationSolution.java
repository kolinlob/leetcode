public class BitManipulationSolution {
    public int majorityElement(int[] nums) {
        int[] bits = new int[32];

        for (int n : nums)
            for (int b = 0; b < 32; b++)
                if ((n >> (31 - b) & 1) == 1)
                    bits[b]++;

        int res = 0;

        for (int b = 0; b < 32; b++)
            if (bits[b] > nums.length / 2)
                res += 1 << (31 - b);

        return res;
    }
}
