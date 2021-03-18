class Solution {
    public int wiggleMaxLength(int[] nums) {
        if (nums.length < 2)
            return nums.length;

        int j = 1;
        while (j < nums.length - 1 && nums[j] == nums[j - 1])
            j++;

        boolean positive = nums[j] > nums[j - 1];
        int len = 1;

        for (int i = 1; i < nums.length; i++) {
            if ((positive && nums[i] > nums[i - 1]) || (!positive && nums[i] < nums[i - 1])) {
                positive = !positive;
                len++;
            }
        }

        return len;
    }
}