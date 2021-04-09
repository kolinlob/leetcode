class Solution {
    public boolean isAlienSorted(String[] words, String order) {
        int[] R = new int[26];
        for (int i = 0; i < order.length(); i++)
            R[order.charAt(i) - 'a'] = i;

        String[] sorted = Arrays.copyOf(words, words.length);
        Arrays.sort(sorted, (b, a) -> {
            int len = Math.min(a.length(), b.length());
            for (int i = 0; i < len; i++) {
                if (a.charAt(i) == b.charAt(i))
                    continue;
                return R[b.charAt(i) - 'a'] - R[a.charAt(i) - 'a'];
            }
            return b.length() - a.length();
        });

        return Arrays.equals(words, sorted);
    }
}