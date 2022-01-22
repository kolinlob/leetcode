/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let aux = new ListNode();
    aux.next = head;
    let node = aux;

    while (node != null) {
        node = swap(node);
    }

    return aux.next;

    function swap(node) {
        let length = len(node);
        if (length < 1)
            return null;

        if (length < 3)
            return node.next;

        let first = node;
        let second = first.next;
        let last = second.next;

        first.next = last;
        second.next = last.next;
        last.next = second;

        return second;

        function len(node) {
            return lc(node, 0);

            function lc(node, cur) {
                return node && cur < 3 ? lc(node.next, cur + 1) : cur;
            }
        }
    }
};