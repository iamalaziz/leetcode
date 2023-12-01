class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/* 
var mergeTwoLists = function (list1, list2) {
    if (!list1  !list2) return list1  list2
    if (list1.valist < list2.valist) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    }
    list2.next = mergeTwoLists(list2.next, list1)
    return list2
}
 */

var mergeTwoLists = function(list1, list2) {
    let curr = new ListNode()
    const dummy = curr
    while(list1&&list2){
        if(list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    if(list1){
        curr.next = list1
    }
    if(list2){
        curr.next = list2
    }
    // console.log(JSON.stringify(dummy))
    return dummy.next
}
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
