public class Solution
{
    public int[] SortedSquares(int[] A)
    {
        var B = new int[A.Length];
        int i, p;
        i = p = 0;

        int j, x;
        j = x = A.Length - 1;

        while (p < A.Length)
        {
            var left = A[i] * A[i];
            var right = A[j] * A[j];

            if (left > right)
            {
                B[x--] = left;
                i++;
                p++;
                continue;
            }

            if (right > left)
            {
                B[x--] = right;
                j--;
                p++;
                continue;
            }

            if (left == right)
            {
                if (i != j)
                {
                    B[x--] = left;
                    i++;
                    p++;

                    B[x--] = right;
                    j--;
                    p++;
                }
                else
                {
                    B[x] = left;
                    p++;
                }
            }
        }

        return B;
    }
}
