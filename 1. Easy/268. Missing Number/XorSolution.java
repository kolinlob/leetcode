class Solution {
    public int missingNumber(int[] nums) {
        int target = nums.length;

        for (int i = 0; i < nums.length; i++)
            target ^= i ^ nums[i];

        return target;
    }
}