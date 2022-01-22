/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = [];
    this.root = root;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    while (this.root) {
        this.stack.push(this.root);
        this.root = this.root.left;
    }
    this.root = this.stack.pop();
    let res = this.root.val;
    this.root = this.root.right;
    return res;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.root || this.stack.length > 0;
};