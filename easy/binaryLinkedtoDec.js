class ListNode {
  constructor(val, next) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
  }
}

const node1 = new ListNode(1);
const node2 = new ListNode(0);
const node3 = new ListNode(1);

node1.next = node2;
node2.next = node3;

var getDecimalValue = function(head) {
    let num = 0

    while(head){
      num = num * 2 + head.val
      head = head.next
    }
    return num
};

console.log(getDecimalValue(node1))