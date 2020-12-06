public class Solution
{
    public int RemoveElement(int[] nums, int val)
    {
        var length = nums.Length;
        var count = 0;
        var p1 = 0;
        var p2 = nums.Length - 1;

        for (var i = 0; i < nums.Length; i++)
            count += Convert.ToInt32(nums[i] == val);

        if (length == count)
            return 0;

        while (p1 <= p2)
        {
            if (nums[p1] == val)
            {
                if (nums[p2] == val)
                {
                    p2--;
                    length--;
                    continue;
                }
                else
                {
                    var temp = nums[p2];
                    nums[p2] = nums[p1];
                    nums[p1] = temp;
                    p2--;
                    p1++;
                    length--;
                }
            }
            else if (nums[p2] == val)
            {
                p2--;
                length--;
            }
            else
            {
                p1++;
            }
        }

        return length;
    }
}
