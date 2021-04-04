class Solution {
    private final int[][] directions = new int[][] { { 0, -1 }, { 1, 0 }, { 0, 1 }, { -1, 0 } };
    private final char LAND = '1';
    private int height;
    private int width;

    public int numIslands(char[][] grid) {
        height = grid.length;
        width = grid[0].length;
        boolean[][] visited = new boolean[height][width];

        int islands = 0;
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (visited[i][j] || grid[i][j] != LAND)
                    continue;

                visited[i][j] = true;
                islands++;
                dfs(new int[] { i, j }, grid, visited);
            }
        }

        return islands;
    }

    private void dfs(int[] cur, char[][] e, boolean[][] v) {
        for (int[] dir : directions) {
            int row = cur[0] + dir[0];
            int col = cur[1] + dir[1];

            if (row < 0 || col < 0 || row >= height || col >= width || v[row][col])
                continue;

            v[row][col] = true;
            if (e[row][col] == LAND)
                dfs(new int[] { row, col }, e, v);
        }
    }
}