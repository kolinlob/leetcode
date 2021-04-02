class Solution {
    public int countNegatives(int[][] grid) {
        int negatives = 0;
        for (int[] row : grid) {
            int lo = 0, hi = row.length;
            int mid = lo + (hi - lo) / 2;
            while (lo < hi) {
                if (row[mid] < 0)
                    hi = mid;
                else
                    lo = mid + 1;

                mid = lo + (hi - lo) / 2;
            }
            negatives += (row.length - lo);
        }
        return negatives;
    }
}