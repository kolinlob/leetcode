class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        return searchMatrix(matrix, target, 0, matrix[0].length - 1, 0, matrix.length - 1);
    }

    private boolean searchMatrix(int[][] matrix, int target, int rlo, int rhi, int clo, int chi) {
        if (rlo > rhi || clo > chi)
            return false;

        int rmid = rlo + (rhi - rlo) / 2;
        int cmid = clo + (chi - clo) / 2;

        if (matrix[cmid][rmid] == target)
            return true;

        if (target < matrix[cmid][rmid]) {
            return searchMatrix(matrix, target, rlo, rmid - 1, clo, chi)
                    || searchMatrix(matrix, target, rlo, rhi, clo, cmid - 1);
        }

        if (target > matrix[cmid][rmid]) {
            return searchMatrix(matrix, target, rmid + 1, rhi, clo, chi)
                    || searchMatrix(matrix, target, rlo, rhi, cmid + 1, chi);
        }

        return false;
    }
}