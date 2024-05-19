const gcd = (a, b) => {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

var insertGreatestCommonDivisors = function (head) {
    /*
    check if: 
    - length is 1

    loop, add

    */
    // if(!head.next) return head
    let curr = head
    while(curr && curr.next){
        const n = gcd(curr.val, curr.next.val)
        curr.next = new ListNode(n, curr.next)
        curr = curr.next.next
    }
    return head
};