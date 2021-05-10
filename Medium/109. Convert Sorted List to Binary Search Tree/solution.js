/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (head == null) return null;
    return insertNode(head, null);

    function insertNode(node, end) {
        if (node == end)
            return null;

        let slow = node;
        let fast = node;

        while (fast != end && fast.next != end) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let root = new TreeNode(slow.val);
        root.left = insertNode(node, slow);
        root.right = insertNode(slow.next, end);
        return root;
    }
};