public class Solution
{
    public int[] ReplaceElements(int[] arr)
    {
        if (arr?.Length == 0)
            return arr;

        var max = -1;

        for (var i = arr.Length - 1; i >= 0; i--)
        {
            var current = max;
            max = Math.Max(max, arr[i]);
            arr[i] = current;
        }

        return arr;
    }
}
