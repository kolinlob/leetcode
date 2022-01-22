class Solution {
    public int[] findErrorNums(int[] nums) {
        int duplicated = 0, missing = 0;

        for (int n : nums) {
            if (nums[Math.abs(n) - 1] < 0)
                duplicated = Math.abs(n);
            else
                nums[Math.abs(n) - 1] *= -1;
        }

        for (int i = 0; i < nums.length; i++)
            if (nums[i] > 0)
                missing = i + 1;

        return new int[] { duplicated, missing };
    }
}