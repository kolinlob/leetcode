class Solution {
    public TreeNode addOneRow(TreeNode root, int v, int d) {
        if (root == null || d < 1)
            return null;

        if (d == 1) {
            TreeNode newRoot = new TreeNode(v);
            newRoot.left = root;
            return newRoot;
        }

        if (d == 2) {
            TreeNode newLeft = new TreeNode(v);
            newLeft.left = root.left;
            root.left = newLeft;

            TreeNode newRight = new TreeNode(v);
            newRight.right = root.right;
            root.right = newRight;
        }

        addOneRow(root.left, v, d - 1);
        addOneRow(root.right, v, d - 1);

        return root;
    }
}