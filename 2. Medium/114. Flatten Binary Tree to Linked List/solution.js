var flatten = function(root) {
    if(root == null)
        return;

    flatten(root.left);
    flatten(root.right);

    let left = root.left;
    let right = root.right;

    root.left = null;
    root.right = left;

    while(root.right != null)
        root = root.right;

    root.right = right;
};