class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = binarySearch(nums, target, "left");
        int last = binarySearch(nums, target, "right");

        return new int[] { first, last };
    }

    private int binarySearch(int[] nums, int target, String leaning) {
        int res = -1;

        int lo = 0;
        int hi = nums.length - 1;

        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (target == nums[mid]) {
                res = mid;
                if ("left".equals(leaning))
                    hi = mid - 1;
                else
                    lo = mid + 1;
            } else if (target < nums[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }

        return res;
    }
}