class Solution {
    public int findUnsortedSubarray(int[] nums) {
        int[] sorted = Arrays.copyOf(nums, nums.length);
        Arrays.sort(sorted);

        Integer firstMisplaced = null, lastMisplaced = null;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != sorted[i]) {
                lastMisplaced = i;

                if (firstMisplaced == null)
                    firstMisplaced = i;
            }
        }

        return firstMisplaced == lastMisplaced ? 0 : 1 + lastMisplaced - firstMisplaced;
    }
}