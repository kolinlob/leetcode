public class Solution
{
    public void DuplicateZeros(int[] arr)
    {
        var zeros = 0;

        foreach (var i in arr)
            zeros += i == 0 ? 1 : 0;

        if (zeros == 0)
            return;

        var newarr = new int[arr.Length + zeros];
        var position = 0;

        for (var i = 0; i < arr.Length; i++)
        {
            if (arr[i] == 0)
            {
                newarr[position++] = 0;
                newarr[position++] = 0;
            }
            else
            {
                newarr[position++] = arr[i];
            }
        }

        for (var j = 0; j < arr.Length; j++)
            arr[j] = newarr[j];
    }
}
