class Solution {
    int x = 0;

    public List<Integer> flipMatchVoyage(TreeNode root, int[] voyage) {
        List<Integer> res = new ArrayList();
        return visit(root, voyage, res) ? res : new ArrayList(Arrays.asList(-1));
    }

    private boolean visit(TreeNode node, int[] v, List<Integer> res) {
        if (node == null)
            return true;

        if (x >= v.length || node.val != v[x])
            return false;

        x++;
        if (node.left == null || node.left.val == v[x])
            return visit(node.left, v, res) && visit(node.right, v, res);

        res.add(node.val);
        return visit(node.right, v, res) && visit(node.left, v, res);
    }
}