class Solution {
    private final HashMap<Character, Character> map;

    public Solution() {
        map = new HashMap<>();
        map.put(')', '(');
        map.put(']', '[');
        map.put('}', '{');
    }

    public boolean isValid(String s) {
        Stack<Character> left = new Stack<>();

        for (char ch : s.toCharArray()) {
            if (map.containsValue(ch))
                left.push(ch);

            if (mismatch(ch, left))
                return false;
        }

        if (!left.empty())
            return false;

        return true;
    }

    private boolean mismatch(char p, Stack<Character> s) {
        return map.containsKey(p) && (s.empty() || map.get(p) != s.pop());
    }
}