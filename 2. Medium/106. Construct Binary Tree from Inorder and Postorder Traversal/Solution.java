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
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        return buildTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
    }

    private TreeNode buildTree(int[] inorder, int infrom, int into, int[] postorder, int postfrom, int postto) {
        if (infrom > into)
            return null;

        TreeNode root = new TreeNode(postorder[postto]);

        int ix = index(inorder, infrom, into, root.val);

        root.right = buildTree(inorder, ix + 1, into, postorder, postto - into + ix, postto - 1);
        root.left = buildTree(inorder, infrom, ix - 1, postorder, postfrom, postfrom - infrom + ix - 1);

        return root;
    }

    private int index(int[] inorder, int infrom, int into, int value) {
        for (int i = infrom; i <= into; i++)
            if (inorder[i] == value)
                return i;

        return -1;
    }
}