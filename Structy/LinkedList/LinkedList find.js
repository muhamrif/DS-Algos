

//n runtime, 1 space

const linkedListFind = (head, target) => {
    let current = head
    while (current!== null){
      if (current.val===target){
        return true
      }
      current=current.next
    }
    return false
  };

  //n runtime, n space

  const linkedListFind2 = (head, target) => {
    if (head===null) return false
      if (head.val===target) return true
      return linkedListFind2(head.next, target)
    };