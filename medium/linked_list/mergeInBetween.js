var mergeInBetween = function (list1, a, b, list2) {
    // pointer to traverse through list1
    let p = list1
    let i = 0
    while (i < a-1) {
        p = p.next
        ++i
    }

    // Node Before A position
    let nodeBeforeA = p

    // tranverse to find node after B
    while(i < b){
        p = p.next
        ++i
    }

    let nodeAfterB = p.next

    
    nodeBeforeA.next = list2

    while(list2.next){
        list2 = list2.next
    }

    list2.next = nodeAfterB

    return list1

};