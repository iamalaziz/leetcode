class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const node1 = new ListNode(7);
const node2 = new ListNode(7);
const node3 = new ListNode(7);
const node4 = new ListNode(7);
const node5 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var removeElements = function(head, val) {
    while(head && head.val == val){
        head=head.next
    }

    let temp = head
    let curr = head
    let prev = null

    while(curr) {
        if(curr.val == val){
            prev.next = curr.next
        } else {
            prev = curr
        }
        curr = curr.next
    }

    return temp
};

// recursive methood

const removeElements2 = (head, val) => {
    if(!head) return null

    if(head.val == val){
        return removeElements2(head.nex, val)
    }

    head.next = removeElements2(head.next, val)

    return head;
}
console.log(removeElements2(node1, 8));