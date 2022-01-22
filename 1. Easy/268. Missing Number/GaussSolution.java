class Solution {
    public int missingNumber(int[] nums) {
        int target = nums.length * (nums.length + 1) / 2;

        for (int i = 0; i < nums.length; i++)
            target -= nums[i];

        return target;
    }
}