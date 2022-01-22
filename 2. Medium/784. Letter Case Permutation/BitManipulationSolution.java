class Solution {
    public List<String> letterCasePermutation(String S) {
        Set<String> res = new HashSet<>();
        int max = 1 << S.length();
        String input = S.toLowerCase();

        for (int i = 0; i < max; i++) {
            char[] permutation = input.toCharArray();

            for (int j = 0; j < S.length(); j++)
                if (((i >> j) & 1) == 1)
                    permutation[j] = Character.toUpperCase(permutation[j]);

            res.add(new String(permutation));
        }

        return new ArrayList<>(res);
    }
}