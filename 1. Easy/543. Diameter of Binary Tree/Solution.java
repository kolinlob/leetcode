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
    int nodes;

    public int diameterOfBinaryTree(TreeNode root) {
        nodes = 1;
        height(root);
        return nodes - 1;
    }

    private int height(TreeNode node) {
        if (node == null)
            return 0;

        int left = height(node.left);
        int right = height(node.right);

        nodes = Math.max(nodes, 1 + left + right);

        return 1 + Math.max(left, right);
    }
}