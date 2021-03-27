class Solution {
    public int countSubstrings(String s) {
        int count = 0;

        for (int i = 0; i < s.length(); i++) {
            count += countPalindromes(s, i, i);
            count += countPalindromes(s, i, i + 1);
        }

        return count;
    }

    private int countPalindromes(String s, int i, int j) {
        int res = 0;
        while (i >= 0 && j < s.length() && s.charAt(i) == s.charAt(j)) {
            res += 1;
            i -= 1;
            j += 1;
        }
        return res;
    }
}