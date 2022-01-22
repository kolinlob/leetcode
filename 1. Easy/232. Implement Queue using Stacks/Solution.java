class MyQueue {
    private final Stack<Integer> in;
    private final Stack<Integer> out;

    public MyQueue() {
        this.in = new Stack<>();
        this.out = new Stack<>();
    }

    public void push(int x) {
        while (!out.isEmpty())
            in.push(out.pop());

        in.push(x);
    }

    public int pop() {
        while (!in.isEmpty())
            out.push(in.pop());

        return out.pop();
    }

    public int peek() {
        while (!in.isEmpty())
            out.push(in.pop());

        return out.peek();
    }

    public boolean empty() {
        return in.isEmpty() && out.isEmpty();
    }
}