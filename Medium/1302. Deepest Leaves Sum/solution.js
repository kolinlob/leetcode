const deepestLeavesSum = function (root) {
    const d = depth(root, 0);
    return sum(root, 1, d);
};

const depth = (node, d) => {
    if (node === null)
        return d;

    return Math.max(depth(node.left, d + 1), depth(node.right, d + 1));
}

const sum = (node, d, m) => {
    if (node === null)
        return 0;

    if (d === m)
        return node.val;

    return sum(node.left, d + 1, m) + sum(node.right, d + 1, m);
}