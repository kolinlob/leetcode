class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        Queue<TreeNode> level = new LinkedList<>();
        List<Double> res = new ArrayList<>();
        level.add(root);

        while (!level.isEmpty()) {
            long levelSum = 0;
            long levelCount = 0;
            Queue<TreeNode> next = new LinkedList<>();

            while (!level.isEmpty()) {
                TreeNode node = level.poll();
                levelSum += (long) node.val;
                levelCount++;

                if (node.left != null)
                    next.add(node.left);

                if (node.right != null)
                    next.add(node.right);
            }

            level = next;
            res.add(levelSum / (double) levelCount);
        }

        return res;
    }
}