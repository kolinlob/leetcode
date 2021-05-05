class BSTIterator {
    private TreeNode root;
    private Stack<TreeNode> stack;

    public BSTIterator(TreeNode root) {
        this.root = root;
        stack = new Stack<>();
    }

    public int next() {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        int res = root.val;
        root = root.right;
        return res;
    }

    public boolean hasNext() {
        return root != null || !stack.isEmpty();
    }
}