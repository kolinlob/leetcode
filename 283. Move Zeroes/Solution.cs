public class Solution
{
    public void MoveZeroes(int[] nums)
    {
        if (nums?.Length == 0)
            return;

        var zeros = 0;
        var write = 0;

        for (var read = 0; read < nums.Length; read++)
        {
            if (nums[read] != 0)
            {
                nums[write] = nums[read];
                write++;
            }
            else
                zeros++;
        }

        for (var z = nums.Length - zeros; z < nums.Length; z++)
            nums[z] = 0;
    }
}
