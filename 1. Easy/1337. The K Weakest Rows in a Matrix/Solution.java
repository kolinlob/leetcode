class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        int[] res = new int[k];
        PriorityQueue<int[]> queue = new PriorityQueue<>((a, b) -> a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]);

        for (int i = 0; i < mat.length; i++)
            queue.add(new int[] { i, binarySearch(mat[i]) });

        for (int i = 0; i < k; i++)
            res[i] = queue.remove()[0];

        return res;
    }

    private int binarySearch(int[] arr) {
        int lo = 0;
        int hi = arr.length;

        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;

            if (arr[mid] == 1)
                lo = mid + 1;
            else
                hi = mid;
        }

        return lo;
    }
}