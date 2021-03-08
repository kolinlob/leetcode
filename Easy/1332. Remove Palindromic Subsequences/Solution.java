class Solution {
    public int removePalindromeSub(String s) {
        if (s.length() == 0)
            return 0;

        int lo = 0;
        int hi = s.length() - 1;

        while (lo < hi) {
            if (s.charAt(lo++) != s.charAt(hi--))
                return 2;
        }

        return 1;
    }
}