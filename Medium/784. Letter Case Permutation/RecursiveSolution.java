class Solution {
    public List<String> letterCasePermutation(String S) {
        List<String> res = new ArrayList<>();
        permutate("", 0, S, res);
        return res;
    }

    private void permutate(String per, int k, String input, List<String> list) {
        if (k == input.length()) {
            list.add(per);
            return;
        }

        if (Character.isDigit(input.charAt(k))) {
            permutate(per + input.charAt(k), k + 1, input, list);
        } else {
            permutate(per + Character.toUpperCase(input.charAt(k)), k + 1, input, list);
            permutate(per + Character.toLowerCase(input.charAt(k)), k + 1, input, list);
        }
    }
}