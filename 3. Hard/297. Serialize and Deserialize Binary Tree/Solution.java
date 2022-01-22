public class Codec {
    public String serialize(TreeNode root) {
        Deque<TreeNode> level = new LinkedList<>();
        ArrayList<String> values = new ArrayList<>();

        if (root == null)
            return null;

        level.add(root);

        while (!level.isEmpty()) {
            Deque<TreeNode> nextLevel = new LinkedList<>();
            ArrayList<String> levelValues = new ArrayList<>();

            while (!level.isEmpty()) {
                TreeNode node = level.poll();
                if (node == null) {
                    levelValues.add(null);
                } else {
                    levelValues.add(Integer.toString(node.val));
                    nextLevel.add(node.left);
                    nextLevel.add(node.right);
                }
            }

            if (!nextLevel.isEmpty()) {
                level = nextLevel;
                values.addAll(levelValues);
            }
        }

        int last = values.size();
        while (last >= 0 && "null".equals(values.get(last - 1)))
            last--;

        return "[" + String.join(",", values.subList(0, last)) + "]";
    }

    public TreeNode deserialize(String data) {
        if (data == null || data.length() == 0)
            return null;

        String[] nodes = data.substring(1, data.length() - 1).split(",");

        if ("null".equals(nodes[0]))
            return null;

        Queue<TreeNode> queue = new LinkedList();
        boolean left = true;
        TreeNode root = new TreeNode(Integer.parseInt(nodes[0]));
        TreeNode cur = null;

        queue.add(root);

        for (int i = 1; i < nodes.length; i++) {
            TreeNode node = null;
            if (!"null".equals(nodes[i])) {
                node = new TreeNode(Integer.parseInt(nodes[i]));
                queue.add(node);
            }

            if (left) {
                cur = queue.poll();
                cur.left = node;
            } else
                cur.right = node;

            left = !left;
        }

        return root;
    }
}