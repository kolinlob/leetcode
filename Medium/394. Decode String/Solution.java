class Solution {
    public String decodeString(String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == ']') {
                StringBuilder text = new StringBuilder();
                char cur = stack.pop();
                while (cur != '[') {
                    text.insert(0, cur);
                    cur = stack.pop();
                }

                StringBuilder num = new StringBuilder();
                cur = stack.pop();

                while (Character.isDigit(cur)) {
                    num.insert(0, cur);
                    if (stack.isEmpty())
                        break;
                    cur = stack.pop();
                }

                if (!Character.isDigit(cur))
                    stack.push(cur);

                int n = Integer.parseInt(num.toString());
                String str = text.toString().repeat(n);

                for (char c1 : str.toCharArray())
                    stack.push(c1);
            } else {
                stack.push(c);
            }
        }

        StringBuilder res = new StringBuilder();
        for (char c : stack)
            res.append(c);

        return res.toString();
    }
}