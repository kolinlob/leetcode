public class Solution {
    private boolean bipartite = true;

    public boolean isBipartite(int[][] graph) {
        boolean[] visited = new boolean[graph.length];
        boolean[] colors = new boolean[graph.length];

        for (int i = 0; i < graph.length; i++)
            if (!visited[i])
                dfs(graph, i, visited, colors);

        return bipartite;
    }

    private void dfs(int[][] graph, int i, boolean[] visited, boolean[] colors) {
        visited[i] = true;
        for (int v : graph[i]) {
            if (!visited[v]) {
                visited[v] = true;
                colors[v] = !colors[i];
                dfs(graph, v, visited, colors);
            } else if (colors[v] == colors[i])
                bipartite = false;
        }
    }
}
