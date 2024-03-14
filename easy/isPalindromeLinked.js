class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const node1 = new ListNode(7);
const node2 = new ListNode(8);
const node3 = new ListNode(10);
const node4 = new ListNode(8);
const node5 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

const reverse = (head) => {
    let curr = head;
    let prev = null;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};

var isPalindrome = function (head) {
    let fast = head;
    let slow = head;
    let startPointer = head;
    let len = 0;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        len++;
    }

    let mid = reverse(slow);

    while (len) {
        len--;
        if (mid.val !== startPointer.val) return false;
        mid = mid.next;
        startPointer = startPointer.next;
    }

    return true;
};

console.log(isPalindrome(node1));
