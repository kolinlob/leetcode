class Solution {
    public int numIslands(char[][] grid) {
        int height = grid.length;
        int width = grid[0].length;
        char LAND = '1';

        int[][] directions = new int[][] { { 0, -1 }, { 1, 0 }, { 0, 1 }, { -1, 0 } };
        boolean[][] visited = new boolean[height][width];
        Queue<int[]> queue = new LinkedList();

        int islands = 0;
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (visited[i][j] || grid[i][j] != LAND)
                    continue;

                visited[i][j] = true;
                queue.offer(new int[] { i, j });
                islands++;

                while (!queue.isEmpty()) {
                    int[] cur = queue.poll();
                    for (int[] dir : directions) {
                        int row = cur[0] + dir[0];
                        int col = cur[1] + dir[1];

                        if (row < 0 || col < 0 || row >= height || col >= width || visited[row][col])
                            continue;

                        visited[row][col] = true;
                        if (grid[row][col] == LAND)
                            queue.offer(new int[] { row, col });
                    }
                }
            }
        }

        return islands;
    }
}