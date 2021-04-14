var partition = function (head, x) {
    let smHead = new ListNode(), sm = smHead;
    let lgHead = new ListNode(), lg = lgHead;

    let curr = head;
    while (curr != null) {
        if (curr.val < x) {
            sm.next = new ListNode(curr.val);
            sm = sm.next;
        } else {
            lg.next = new ListNode(curr.val);
            lg = lg.next;
        }
        curr = curr.next;
    }

    sm.next = lgHead.next;

    return smHead.next;
};