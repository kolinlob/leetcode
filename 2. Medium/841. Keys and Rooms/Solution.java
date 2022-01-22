class Solution {
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        boolean[] visited = new boolean[rooms.size()];
        dfs(rooms, visited, 0);

        for (boolean check : visited)
            if (!check)
                return false;

        return true;
    }

    private void dfs(List<List<Integer>> rooms, boolean[] visited, int v) {
        visited[v] = true;
        for (int key : rooms.get(v))
            if (!visited[key])
                dfs(rooms, visited, key);
    }
}