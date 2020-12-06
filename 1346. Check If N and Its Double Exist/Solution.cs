public class Solution
{
    public bool CheckIfExist(int[] arr)
    {
        if (arr?.Length == 0)
            return false;

        var hs = new HashSet<int>();

        for (var i = 0; i < arr.Length; i++)
        {
            if (hs.Contains(arr[i] * 2) || (arr[i] % 2 == 0 && hs.Contains(arr[i] / 2)))
                return true;

            hs.Add(arr[i]);
        }

        return false;
    }
}
