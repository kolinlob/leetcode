class Solution {
    public int singleNumber(int[] nums) {
        HashSet<Integer> seen = new HashSet<Integer>();

        for (int i = 0; i < nums.length; i++)
            if(seen.contains(nums[i]))
                seen.remove(nums[i]);
            else
                seen.add(nums[i]);

        Iterator<Integer> it = seen.iterator();
        return it.next();
    }
}