class Solution {
    public boolean reorderedPowerOf2(int N) {
        if ((N & N - 1) == 0)
            return true;

        char[] strN = Integer.toString(N).toCharArray();
        Arrays.sort(strN);

        for (int i = 0; i < 30; i++) {
            int cur = (1 << i);
            char[] strCur = Integer.toString(cur).toCharArray();

            if (strCur.length < strN.length)
                continue;

            if (strCur.length == strN.length) {
                Arrays.sort(strCur);
                if (Arrays.equals(strCur, strN))
                    return true;
            }

            if (strCur.length > strN.length)
                return false;
        }

        return false;
    }
}