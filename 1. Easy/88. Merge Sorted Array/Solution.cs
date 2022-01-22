public class Solution
{
    public void Merge(int[] nums1, int m, int[] nums2, int n)
    {
        var newarr = new int[m + n];
        var position = 0;
        var f = 0;
        var s = 0;

        while (position < n + m)
        {
            if (f < m && s < n)
            {
                if (nums1[f] < nums2[s])
                    newarr[position++] = nums1[f++];
                else
                    newarr[position++] = nums2[s++];
            }
            else if (f >= m)
                newarr[position++] = nums2[s++];
            else
                newarr[position++] = nums1[f++];
        }

        for (var i = 0; i < nums1.Length; i++)
            nums1[i] = newarr[i];

    }
}
