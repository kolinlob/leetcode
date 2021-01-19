public class Solution
{
    public bool ValidMountainArray(int[] A)
    {
        if (A?.Length < 3)
            return false;

        if (A[1] <= A[0])
            return false;

        var up = true;

        for (var i = 1; i < A.Length; i++)
        {
            if (A[i] == A[i - 1])
                return false;

            if (up && A[i] < A[i - 1])
            {
                up = !up;
                continue;
            }

            if (!up && A[i] > A[i - 1])
                return false;
        }

        return !up;
    }
}
