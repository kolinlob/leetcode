public class Solution
{
    public int RemoveDuplicates(int[] nums)
    {
        if (nums.Length == 0)
            return 0;

        var duplicatesCount = 0;
        var currentUnique = nums[0];

        for (var i = 1; i < nums.Length; i++)
        {
            if (nums[i] == currentUnique)
                duplicatesCount++;
            else
            {
                currentUnique = nums[i];
                nums[i - duplicatesCount] = currentUnique;
            }
        }

        return nums.Length - duplicatesCount;
    }
}
