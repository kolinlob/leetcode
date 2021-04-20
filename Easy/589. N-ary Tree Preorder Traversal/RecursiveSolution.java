class Solution {
    public List<Integer> preorder(Node root) {
        List<Integer> res = new ArrayList<>();
        visit(root, res);
        return res;
    }

    private void visit(Node node, List<Integer> tra) {
        if (node == null)
            return;

        tra.add(node.val);
        for (Node c : node.children) {
            visit(c, tra);
        }
    }
}