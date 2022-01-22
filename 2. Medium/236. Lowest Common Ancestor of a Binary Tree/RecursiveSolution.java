class Solution {
    private TreeNode result = null;

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        path(root, p, q);
        return this.result;
    }

    private boolean path(TreeNode node, TreeNode p, TreeNode q) {
        if (node == null)
            return false;

        boolean cur = node == p || node == q;
        boolean left = path(node.left, p, q);
        boolean right = path(node.right, p, q);

        if ((cur && left) || (cur && right) || (left && right))
            this.result = node;

        return cur || left || right;
    }
}