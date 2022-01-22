class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        List<Integer> res = new ArrayList<Integer>();
        
        for (int i = 0; i < nums.length; i++) {
            int x = Math.abs(nums[i]) - 1;
            nums[x] = -Math.abs(nums[x]); 
        }

        for (int j = 0; j < nums.length; j++)
            if(nums[j] > 0)
                res.add(j + 1);

        return res;
    }
}
