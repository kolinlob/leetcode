class Solution {
    public boolean reorderedPowerOf2(int N) {
        if ((N & N - 1) == 0)
            return true;

        char[] strN = Integer.toString(N).toCharArray();
        Arrays.sort(strN);

        for (int i = 0; i < 30; i++) {
            char[] cur = Integer.toString(1 << i).toCharArray();

            if (cur.length < strN.length)
                continue;

            if (cur.length == strN.length) {
                Arrays.sort(cur);
                if (Arrays.equals(cur, strN))
                    return true;
            }

            if (cur.length > strN.length)
                return false;
        }

        return false;
    }
}