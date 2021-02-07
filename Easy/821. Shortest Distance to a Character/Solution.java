class Solution {
    public int[] shortestToChar(String s, char c) {
        int[] ans = new int[s.length()];
        int i = 0, j = 0, lastIndexOfC = -1;

        while (i < ans.length || j < ans.length) {
            if (i < ans.length && s.charAt(i) == c) {
                ans[j] = lastIndexOfC < 0 ? Math.abs(i - j) : Math.min(Math.abs(lastIndexOfC - j), Math.abs(i - j));

                if (i == j) {
                    lastIndexOfC = i;
                    i++;
                }
                j++;
            } else {
                ans[j] = lastIndexOfC < 0 ? Math.abs(i - j) : Math.abs(lastIndexOfC - j);

                if (i < ans.length)
                    i++;
                else
                    j++;

            }
        }

        return ans;
    }
}
