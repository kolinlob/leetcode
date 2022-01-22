/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int px = 0;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return buildTree(preorder, inorder, 0, inorder.length - 1);
    }

    private TreeNode buildTree(int[] preorder, int[] inorder, int from, int to) {
        if (from > to)
            return null;

        TreeNode root = new TreeNode(preorder[px++]);

        int ix = index(inorder, from, to, root.val);

        root.left = buildTree(preorder, inorder, from, ix - 1);
        root.right = buildTree(preorder, inorder, ix + 1, to);

        return root;
    }

    private int index(int[] inorder, int from, int to, int value) {
        for (int i = from; i <= to; i++)
            if (inorder[i] == value)
                return i;

        return -1;
    }
}