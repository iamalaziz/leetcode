var hasCycle = function(head) {
    if(!head || !head.next) return false;
    // Floyd Marshall algorithm

    let oneNodeMove = head // moves by one node
    let twoNodesMove = head.next // moves by two nodes

    while(twoNodesMove && twoNodesMove.next){
        if(oneNodeMove === twoNodesMove){
            return true
        }
        oneNodeMove = oneNodeMove.next
        twoNodesMove = twoNodesMove.next.next
    }

    return false
};