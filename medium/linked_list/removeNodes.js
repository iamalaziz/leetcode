var removeNodes = function (head) {
    if (!head) return null

    head.next = removeNodes(head.next)

    if (head.next !==null && head.val < head.next.val) {
        return head.next
    } else {
        return head
    }
};