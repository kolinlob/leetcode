var invertTree = function (root) {
    if (root == null)
        return null;

    const invleft = invertTree(root.left);
    const invright = invertTree(root.right);

    root.right = invleft;
    root.left = invright;

    return root;
};