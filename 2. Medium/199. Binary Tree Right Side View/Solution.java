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
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();

        if (root == null)
            return result;

        Deque<TreeNode> level = new LinkedList<>();
        Deque<TreeNode> nextLevel = new LinkedList<>();

        level.add(root);

        while (!level.isEmpty()) {
            TreeNode node = level.poll();

            if (node.left != null)
                nextLevel.add(node.left);

            if (node.right != null)
                nextLevel.add(node.right);

            if (level.isEmpty()) {
                result.add(node.val);
                level = nextLevel;
                nextLevel = new LinkedList<>();
            }
        }
        return result;
    }
}