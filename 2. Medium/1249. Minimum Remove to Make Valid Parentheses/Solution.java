class Solution {
    public String minRemoveToMakeValid(String s) {
        String[] res = s.split("");
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < res.length; i++) {
            if ("(".equals(res[i]))
                stack.push(i);

            if (")".equals(res[i])) {
                if (!stack.empty())
                    stack.pop();
                else
                    res[i] = "";
            }
        }

        for (int i : stack)
            res[i] = "";

        return String.join("", res);
    }
}