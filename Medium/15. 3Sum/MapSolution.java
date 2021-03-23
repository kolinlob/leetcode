class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList();
        Map<Integer, Integer> dups = new HashMap();

        if (nums.length < 3)
            return res;

        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 2; i++) {
            for (int j = i + 1; j < nums.length - 1; j++) {
                int sum2 = nums[i] + nums[j];

                Integer dup = dups.get(sum2);
                if (dup != null && dup == nums[i])
                    continue;

                int x = Arrays.binarySearch(nums, j + 1, nums.length, -sum2);
                if (x >= 0) {
                    dups.put(sum2, nums[i]);
                    res.add(Arrays.asList(nums[i], nums[j], nums[x]));
                }
            }
        }

        return res;
    }
}