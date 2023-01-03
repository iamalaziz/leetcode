var removeNthFromEnd = function (head, n) {
  let p1 = head;
  let p2 = head;
  for(let i = 0; i < n; i++) {
    p2 = p2.next
  }
  if(p2 === null) {
    head = head.next
    return head;
  }
  while(p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p1.next = p1.next.next
  
  return head;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
};

console.log(removeNthFromEnd(head, 2));
