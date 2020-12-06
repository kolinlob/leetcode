public class Solution
{
    public int FindMaxConsecutiveOnes(int[] nums)
    {
        var max = 0;
        var cur = 0;
        
        for (var i = 0; i < nums.Length; i++)
        {
            if(nums[i] == 1)
            {
                cur++;
                max = Math.Max(max, cur);
            }
            else
            {
                cur = 0;
            }
        }
        
        return max;
    }
}