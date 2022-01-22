public class Solution
{
    public int FindNumbers(int[] nums)
    {
        var counter = 0;
        foreach(var num in nums)
        {
            var len = 0;
            var temp = num;
            while(temp > 0)
            {
                len++;
                temp = temp / 10;
            }
            counter += len % 2 == 0 ? 1 : 0;
        }

        return counter;
    }
}