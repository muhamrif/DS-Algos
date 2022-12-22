//n runtime, 1 space

const reverseList = (head) => {
    let current = head
    let prev = null
    
    while (current !== null){
      const next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return prev
  };

  
  //n runtime, n space

  const reverseList2 = (head, prev = null) => {
    if (head===null) return prev
     const next = head.next
     head.next = prev
     return reverseList2(next, head)
   };