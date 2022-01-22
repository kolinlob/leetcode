class Solution {
    public int openLock(String[] deadends, String target) {
        Set<String> used = new HashSet(Arrays.asList(deadends));
        Queue<String> queue = new LinkedList();
        int moves = -1;

        if (!used.contains("0000"))
            queue.offer("0000");

        while (!queue.isEmpty()) {
            moves++;
            int s = queue.size();
            for (int i = 0; i < s; i++) {
                String cur = queue.poll();
                if (cur.equals(target))
                    return moves;

                for (String next : adjacentMoves(cur)) {
                    if (!used.contains(next)) {
                        queue.offer(next);
                        used.add(next);
                    }
                }
            }
        }

        return -1;
    }

    private List<String> adjacentMoves(String state) {
        List<String> adj = new ArrayList();
        for (int i = 0; i < state.length(); i++) {
            adj.add(state.substring(0, i) + forward(state.charAt(i)) + state.substring(i + 1));
            adj.add(state.substring(0, i) + rewind(state.charAt(i)) + state.substring(i + 1));
        }

        return adj;
    }

    private int forward(int x) {
        x -= '0';
        return x == 9 ? 0 : (x + 1);
    }

    private int rewind(int x) {
        x -= '0';
        return x == 0 ? 9 : (x - 1);
    }
}