class Solution {
    public List<String> wordSubsets(String[] A, String[] B) {
        int[] maxf = new int[26];
        for (String b : B) {
            int[] tmp = counts(b.toCharArray());
            for (int i = 0; i < 26; i++)
                maxf[i] = maxf[i] < tmp[i] ? tmp[i] : maxf[i];
        }

        List<String> universal = new ArrayList();

        loop: for (String a : A) {
            int[] counts = counts(a.toCharArray());
            for (int i = 0; i < 26; i++)
                if (counts[i] < maxf[i])
                    continue loop;

            universal.add(a);
        }

        return universal;
    }

    private int[] counts(char[] word) {
        int[] res = new int[26];
        for (char c : word)
            res[c - 'a']++;
        return res;
    }
}