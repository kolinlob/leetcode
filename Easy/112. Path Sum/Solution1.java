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
    public boolean hasPathSum(TreeNode root, int targetSum) {
        for (int r : traverse(root, 0, new ArrayList<Integer>()))
            if (r == targetSum)
                return true;

        return false;
    }

    private List<Integer> traverse(TreeNode node, int acc, List<Integer> list) {
        if (node == null)
            return list;

        if (node.left != null)
            traverse(node.left, acc + node.val, list);

        if (node.right != null)
            traverse(node.right, acc + node.val, list);

        if (node.left == null && node.right == null)
            list.add(acc + node.val);

        return list;
    }
}