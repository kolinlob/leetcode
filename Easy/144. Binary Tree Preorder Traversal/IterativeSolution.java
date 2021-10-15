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
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        Deque<TreeNode> stack = new LinkedList<>();

        TreeNode current = root;
        stack.push(current);

        while (!stack.isEmpty() || current != null) {
            while (current != null && current.left != null) {
                current = current.left;
                stack.push(current);
            }

            TreeNode popped = stack.pop();
            if (popped == null)
                continue;

            result.add(popped.val);

            current = popped.right;
            if (current != null)
                stack.push(current);
        }

        return result;
    }
}