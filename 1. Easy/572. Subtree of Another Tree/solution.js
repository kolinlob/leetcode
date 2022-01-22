/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
  return root == null
      ? false
      : same(root, subRoot)
          ? true
          : isSubtree(root.left, subRoot) ||
            isSubtree(root.right, subRoot);
  
  function same(tree1, tree2) {
      if(tree1 == null && tree2 == null) return true;
      if(tree1 == null || tree2 == null) return false;
      return tree1.val == tree2.val &&
          same(tree1.left, tree2.left) &&
          same(tree1.right, tree2.right);
  }
};
