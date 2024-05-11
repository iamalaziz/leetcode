class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var reverseBetween = function (head, left, right) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let leftPreNode = dummy;
    let curr = head;

    for (let i = 0; i < left - 1; i++) {
        leftPreNode = leftPreNode.next;
        curr = curr.next;
    }

    let subListHead = curr;

    let prev = null;
    for (let i = 0; i <= right - left; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    leftPreNode.next = prev
    subListHead.next = curr
    return dummy.next;
};

console.log(reverseBetween(node1));
