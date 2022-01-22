class Solution {
    public int maxSubArray(int[] nums) {
        int acc = nums[0];
        int max = nums[0];

        for (int i = 1; i < nums.length; i++) {
            acc = Math.max(acc + nums[i], nums[i]);
            max = Math.max(max, acc);
        }

        return max;
    }
}