public class Solution
{
    public int[] SortArrayByParity(int[] A)
    {
        if (A?.Length < 2)
            return A;

        var odd = A.Length - 1;

        for (var i = 0; i < odd; i++)
        {
            if (A[i] % 2 == 1)
            {
                while (odd > i && A[odd] % 2 == 1)
                    odd--;

                if (odd >= 0)
                {
                    var t = A[i];
                    A[i] = A[odd];
                    A[odd] = t;
                }
            }
        }

        return A;
    }
}
