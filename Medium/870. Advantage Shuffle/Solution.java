class Solution {
    public int[] advantageCount(int[] A, int[] B) {
        Arrays.sort(A);

        int[] A1 = new int[A.length];

        PriorityQueue<Pair<Integer, Integer>> bmaxq = new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());
        for (int i = 0; i < B.length; i++)
            bmaxq.offer(new Pair(i, B[i]));

        int min = 0, max = A.length - 1;
        while (!bmaxq.isEmpty()) {
            Pair<Integer, Integer> b = bmaxq.poll();
            A1[b.getKey()] = A[max] <= B[b.getKey()] ? A[min++] : A[max--];
        }

        return A1;
    }
}