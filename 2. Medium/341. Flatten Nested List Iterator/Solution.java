public class NestedIterator implements Iterator<Integer> {
    private final Stack<NestedInteger> stack;

    public NestedIterator(List<NestedInteger> nestedList) {
        stack = new Stack<>();
        flatten(nestedList);
    }

    @Override
    public Integer next() {
        if (!hasNext())
            return null;

        return stack.pop().getInteger();
    }

    @Override
    public boolean hasNext() {
        while (!stack.isEmpty() && !stack.peek().isInteger())
            flatten(stack.pop().getList());

        return !stack.isEmpty();
    }

    private void flatten(List<NestedInteger> list) {
        for (int i = list.size() - 1; i >= 0; i--)
            stack.push(list.get(i));
    }
}