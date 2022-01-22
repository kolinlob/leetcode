class Solution {
    public String findLongestWord(String s, List<String> d) {
        String longest = "";

        for (String w : d) {
            if (w.length() < longest.length() || (w.length() == longest.length() && w.compareTo(longest) > 0))
                continue;

            int p = -1;

            for (int i = 0; i < w.length(); i++) {
                p = s.indexOf(w.charAt(i), p + 1);
                if (p == -1)
                    break;
            }

            if (p != -1)
                longest = w;
        }

        return longest;
    }
}