class MyStack {
    private final Queue<Integer> in;
    private final Queue<Integer> out;

    public MyStack() {
        this.in = new LinkedList<>();
        this.out = new LinkedList<>();
    }

    public void push(int x) {
        while (!out.isEmpty())
            in.offer(out.poll());
        in.offer(x);
    }

    public int pop() {
        while (!out.isEmpty())
            in.offer(out.poll());

        while (in.size() > 1)
            out.offer(in.poll());

        return in.poll();
    }

    public int top() {
        while (!out.isEmpty())
            in.offer(out.poll());

        while (in.size() > 1)
            out.offer(in.poll());

        int x = in.poll();

        out.offer(x);

        return x;
    }

    public boolean empty() {
        return in.isEmpty() && out.isEmpty();
    }
}