class MinStack {
    private final PriorityQueue<Integer> minpq;
    private final Stack<Integer> data;

    public MinStack() {
        data = new Stack();
        minpq = new PriorityQueue();
    }

    public void push(int x) {
        data.push(x);
        minpq.offer(x);
    }

    public void pop() {
        minpq.remove(data.pop());
    }

    public int top() {
        return data.peek();
    }

    public int getMin() {
        return minpq.peek();
    }
}