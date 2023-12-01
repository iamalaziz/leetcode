class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const node1 = new ListNode(12);
const node2 = new ListNode(13);
const node3 = new ListNode(14);
const node4 = new ListNode(15);
const node5 = new ListNode(16);
// const node6 = new ListNode(17);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
// node5.next = node6;


var middleNode = function (head) {
    let temp = head;
    let count = 0;
    while (temp != null) {
        count++;
        temp = temp.next;
    }

    count = count % 2 == 1 ? Math.round(count / 2) - 1 : Math.round(count / 2)
    console.log(count)
    while (count > 0) {
        head = head.next
        count--
    }
    return head
};

console.log(middleNode(node1))