class Solution {
    public int evalRPN(String[] tokens) {
        Set<String> operators = new HashSet<>(Arrays.asList("+","-","*", "/"));
        Stack<Integer> operands = new Stack<>();

        for (String t : tokens) {
            if (operators.contains(t)) {
                int b = operands.pop();
                int a = operands.pop();
                operands.push(operate(a, b, t));
            } else
                operands.push(Integer.parseInt(t));
        }
        return operands.peek();
    }

    private int operate (int a, int b, String op) {
        switch(op) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return a / b;
            default: return 0;
        }
    }
}