/**
 * @param {TreeNode} root
 * @return {number}
 */
 var findTilt = function(root) {
    let memo = new Map();
    return tilt(root, memo);
};

var tilt = function(node, memo) {
    if (node == null) return 0;

    if (!memo.has(node.left)) memo.set(node.left, sum(node.left));
    let left = memo.get(node.left);
    
    if (!memo.has(node.right)) memo.set(node.right, sum(node.right));
    let right = memo.get(node.right);
    
    return Math.abs(right - left) + tilt(node.left, memo) + tilt(node.right, memo); 
};

var sum = function(node) {
    if (node == null) return 0;
    return node.val + sum(node.left) + sum(node.right);
}