class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const node1 = new ListNode(12);
const node2 = new ListNode(12);
const node3 = new ListNode(12);
const node4 = new ListNode(13);
const node5 = new ListNode(37);
const node6 = new ListNode(49);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

var deleteDuplicates = function (head) {
    let currNode = head
    while(head && head.next){
        if(head.val == head.next.val){
            head.next = head.next.next
        }else {
            head = head.next
        }
    }
    return currNode
};


console.log(deleteDuplicates(node1))