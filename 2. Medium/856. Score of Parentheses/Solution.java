class Solution {
    public int scoreOfParentheses(String S) {
        int score = 0, nesting = 0;

        char prev = '\0';
        for (char curr : S.toCharArray()) {
            if (curr == '(')
                nesting++;

            if (curr == ')') {
                nesting--;

                if (prev == '(')
                    score += 1 << nesting;
            }

            prev = curr;
        }

        return score;
    }
}