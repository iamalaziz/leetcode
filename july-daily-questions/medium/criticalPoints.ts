/// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
    /// indexes of critical nodes
    let indexes: number[] = [];
    let i: number = 1;
    let curr: ListNode | null = head;

    while (curr.next.next) {
        let mid: number = curr.next.val;
        if (mid > curr.val && mid > curr.next.next.val) {
            indexes.push(i);
        } else if (mid < curr.val && mid < curr.next.next.val) {
            indexes.push(i);
        }
        curr = curr.next;
        i++;
    }

    let len: number = indexes.length;

    if (len < 2) return [-1, -1];

    let max: number = indexes[len - 1] - indexes[0];
    let min: number = Infinity;

    for (let j: number = 1; j < len; j++) {
        let diff: number = indexes[j] - indexes[j - 1];
        if (diff < min) {
            min = diff;
        }
    }

    return [min, max];
}
