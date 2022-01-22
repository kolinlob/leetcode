class Solution {
    public int numberOfArithmeticSlices(int[] A) {
        if (A == null || A.length < 3)
            return 0;

        List<Integer> sequences = new ArrayList<>();

        int trioles = 0;
        for (int i = 0; i < A.length - 2; i++) {
            if (A[i + 2] - A[i + 1] == A[i + 1] - A[i])
                trioles++;
            else if (trioles > 0) {
                sequences.add(2 + trioles);
                trioles = 0;
            }
        }

        if (trioles > 0)
            sequences.add(2 + trioles);

        int count = 0;
        for (int s : sequences) {
            System.out.println(s);
            count += slices(s);
        }

        return count;
    }

    int slices(int n) {
        if (n < 3)
            return 0;
        if (n == 3)
            return 1;

        return slices(n - 1) + (n - 2);
    }
}