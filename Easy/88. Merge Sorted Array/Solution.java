class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;
        int j = n - 1;
        int ins = nums1.length - 1;
        int[] newarr = new int[m + n];

        while (i >= 0 && j >= 0) {
            int num1 = nums1[i];
            int num2 = nums2[j];

            if (num1 >= num2) {
                newarr[ins] = num1;
                i--;
            } else {
                newarr[ins] = num2;
                j--;
            }
            ins--;
        }

        if (j < 0) {
            while (ins >= 0) {
                newarr[ins] = nums1[ins];
                ins--;
            }
        }

        if (i < 0) {
            for (int x = 0; x <= j; x++)
                newarr[x] = nums2[x];
        }

        for (int x = 0; x < newarr.length; x++)
            nums1[x] = newarr[x];
    }
}