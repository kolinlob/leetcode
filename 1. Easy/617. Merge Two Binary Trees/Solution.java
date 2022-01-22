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
    public TreeNode mergeTrees(TreeNode t1, TreeNode t2) {
        if(t1 == null && t2 == null)
            return null;

        if(t1 != null && t2 != null) {
            TreeNode t3 = new TreeNode(t1.val + t2.val);
            t3.left = mergeTrees(t1.left, t2.left);
            t3.right = mergeTrees(t1.right, t2.right);
            return t3;
        }

        return t1 == null ? t2 : t1;
    }
}
