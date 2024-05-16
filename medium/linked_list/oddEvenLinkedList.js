var oddEvenList = function (head) {
    if(head === null) return head
    // Pointers
    let odd = head
    let even = head.next
    // Reference for the head of even nodes list
    let evenHead = even

    while (even && even.next) {
        odd.next = odd.next.next
        odd = odd.next

        even.next = even.next.next
        even = even.next
    }
    odd.next = evenHead

    return head
};

