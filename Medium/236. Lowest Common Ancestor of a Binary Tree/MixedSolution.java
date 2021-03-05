class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        Deque<TreeNode> pathP = new LinkedList<>();
        path(root, p, pathP);

        Deque<TreeNode> pathQ = new LinkedList<>();
        path(root, q, pathQ);

        TreeNode pp = null;
        TreeNode qq = null;
        TreeNode res = null;

        while (!pathP.isEmpty() && !pathQ.isEmpty() && pp == qq) {
            pp = pathP.poll();
            qq = pathQ.poll();

            if (pp != qq)
                return res;

            res = pp;
        }

        return res;
    }

    private boolean path(TreeNode node, TreeNode target, Deque<TreeNode> path) {
        if (node == null)
            return false;

        if (node == target || path(node.left, target, path) || path(node.right, target, path)) {
            path.push(node);
            return true;
        }

        return false;
    }
}