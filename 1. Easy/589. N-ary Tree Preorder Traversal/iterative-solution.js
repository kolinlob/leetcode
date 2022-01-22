var preorder = function (root) {
    const list = [];
    const stack = [];

    let current = root;
    stack.push(current);

    while (stack.length > 0 && current) {
        current = stack.pop();
        list.push(current.val);

        for (let i = current.children.length - 1; i >= 0; i--) {
            stack.push(current.children[i]);
        }
    }

    return list;
};