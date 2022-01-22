class Solution {
    public String[] spellchecker(String[] wordlist, String[] queries) {
        HashSet<String> exact = new HashSet();
        HashMap<String, String> lower = new HashMap();
        HashMap<String, String> vowel = new HashMap();

        Set<Character> vowels = new HashSet();
        vowels.add('a');
        vowels.add('e');
        vowels.add('i');
        vowels.add('o');
        vowels.add('u');

        for (String word : wordlist) {
            exact.add(word);
            lower.putIfAbsent(word.toLowerCase(), word);

            char[] w = word.toLowerCase().toCharArray();
            for (int i = 0; i < w.length; i++)
                if (vowels.contains(w[i]))
                    w[i] = '*';

            vowel.putIfAbsent(new String(w), word);
        }

        String[] res = new String[queries.length];

        for (int q = 0; q < queries.length; q++) {
            if (exact.contains(queries[q]))
                res[q] = queries[q];
            else if (lower.containsKey(queries[q].toLowerCase()))
                res[q] = lower.get(queries[q].toLowerCase());
            else {
                char[] key = queries[q].toLowerCase().toCharArray();
                for (int i = 0; i < key.length; i++)
                    if (vowels.contains(key[i]))
                        key[i] = '*';

                res[q] = vowel.getOrDefault(new String(key), "");
            }
        }

        return res;
    }
}