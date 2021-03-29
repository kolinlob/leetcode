class Solution {
    public int numSquares(int n) {
        int depth = 0;

        Set<Integer> used = new HashSet();
        Queue<Integer> queue = new LinkedList();

        queue.offer(0);
        used.add(0);

        while (!queue.isEmpty()) {
            depth++;
            int s = queue.size();
            while (s-- > 0) {
                int cur = queue.poll();
                for (int i = 1; i * i <= n; i++) {
                    int next = cur + i * i;
                    if (next == n)
                        return depth;

                    if (!used.contains(next)) {
                        queue.offer(next);
                        used.add(next);
                    }
                }
            }
        }

        return depth;
    }
}