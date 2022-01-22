var preorder = function (root) {
    const list = [];
    const visit = (node, list) => {
        if (node == null)
            return;

        list.push(node.val);
        for (let child of node.children) {
            visit(child, list);
        }
    }

    visit(root, list);
    return list;
};