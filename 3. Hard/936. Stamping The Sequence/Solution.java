class Solution {
    public int[] movesToStamp(String stamp, String target) {
        char[] tc = target.toCharArray();
        char[] sc = stamp.toCharArray();

        Stack<Integer> backwards = new Stack();
        boolean[] processed = new boolean[tc.length];
        int unstamped = 0;

        while (unstamped < tc.length) {
            boolean ok = false;
            for (int i = 0; i <= tc.length - sc.length; i++) {
                if (!processed[i] && canUnstamp(tc, i, sc)) {
                    unstamped += unstamp(tc, i, sc.length);
                    backwards.push(i);
                    processed[i] = true;
                    ok = true;
                }
            }

            if (!ok)
                return new int[0];
        }

        int[] res = new int[backwards.size()];
        for (int i = 0; i < res.length; i++)
            res[i] = backwards.pop();

        return res;
    }

    private boolean canUnstamp(char[] target, int pos, char[] stamp) {
        for (int i = 0; i < stamp.length; i++) {
            if (target[pos + i] == '?')
                continue;

            if (target[pos + i] != stamp[i])
                return false;
        }
        return true;
    }

    private int unstamp(char[] target, int pos, int s) {
        int count = 0;
        for (int i = 0; i < s; i++) {
            if (target[pos + i] == '?')
                continue;

            target[pos + i] = '?';
            count++;
        }
        return count;
    }
}