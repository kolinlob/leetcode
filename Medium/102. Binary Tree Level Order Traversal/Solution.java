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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> results = new ArrayList<List<Integer>>();

        if (root == null)
            return results;

        Queue<TreeNode> thisLevel = new LinkedList<>();
        Queue<TreeNode> nextLevel = new LinkedList<>();

        thisLevel.add(root);

        List<Integer> list = new ArrayList<>();
        while (!thisLevel.isEmpty()) {
            TreeNode node = thisLevel.poll();

            if (node.left != null)
                nextLevel.add(node.left);

            if (node.right != null)
                nextLevel.add(node.right);

            list.add(node.val);

            if (thisLevel.isEmpty()) {
                results.add(list);
                list = new ArrayList<>();
                thisLevel = nextLevel;
                nextLevel = new LinkedList<>();
            }
        }

        return results;
    }

}