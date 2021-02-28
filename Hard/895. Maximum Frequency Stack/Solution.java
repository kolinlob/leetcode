class FreqStack {
    private Map<Integer, Integer> fre;
    private Map<Integer, Stack<Integer>> val;
    private int maxfre;

    public FreqStack() {
        fre = new HashMap<>();
        val = new HashMap<>();
        maxfre = 0;
    }

    public void push(int x) {
        int f = fre.getOrDefault(x, 0) + 1;
        fre.put(x, f);

        maxfre = Math.max(maxfre, f);

        val.computeIfAbsent(f, n -> new Stack<Integer>()).push(x);
    }

    public int pop() {
        int pop = val.get(maxfre).pop();
        fre.put(pop, fre.get(pop) - 1);

        if (val.get(maxfre).empty())
            maxfre--;

        return pop;
    }
}