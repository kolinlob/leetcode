public class Solution
{
    public int HeightChecker(int[] heights)
    {
        var sorted = heights.OrderBy(x => x).ToArray();
        var count = 0;
        for (var i = 0; i < heights.Length; i++)
        {
            if (sorted[i] != heights[i])
                count++;
        }

        return count;
    }
}
