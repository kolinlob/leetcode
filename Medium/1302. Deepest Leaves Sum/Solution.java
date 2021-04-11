class Solution {
    public int deepestLeavesSum(TreeNode root) {
        int maxdepth = depth(root, 0);
        return sum(root, 1, maxdepth);
    }

    private int depth(TreeNode node, int d) {
        if (node == null)
            return d;

        return Math.max(depth(node.left, d + 1), depth(node.right, d + 1));
    }

    private int sum(TreeNode node, int d, int maxd) {
        if (node == null)
            return 0;

        if (d == maxd)
            return node.val;

        return sum(node.left, d + 1, maxd) + sum(node.right, d + 1, maxd);
    }
}