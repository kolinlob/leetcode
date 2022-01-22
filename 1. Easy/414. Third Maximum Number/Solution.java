class Solution {
    public int thirdMax(int[] nums) {
        Integer[] tops = new Integer[3];
        
        for (Integer num : nums) {
            if(num.equals(tops[0]) || num.equals(tops[1]) || num.equals(tops[2]))
                continue;
            
            if(tops[0] == null || num > tops[0]) {
                tops[2] = tops[1];
                tops[1] = tops[0];
                tops[0] = num;
            } else if(tops[1] == null || num > tops[1]) {
                tops[2] = tops[1];
                tops[1] = num;
            } else if(tops[2] == null || num > tops[2])
                tops[2] = num;
        }
        
        return tops[2] == null ? tops[0] : tops[2];
    }
}