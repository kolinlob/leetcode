class Solution {
    public String simplifyPath(String path) {
        Stack<String> stack = new Stack<>();

        for (String section : path.split("/")) {
            if (section.isEmpty() || ".".equals(section))
                continue;

            if (section.equals("..")) {
                if (!stack.empty())
                    stack.pop();
                continue;
            }

            stack.push(section);
        }

        return "/" + String.join("/", stack);
    }
}