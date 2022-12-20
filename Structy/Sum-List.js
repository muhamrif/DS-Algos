
//n time, n space
const sumList = (head) => {
    let sum = 0
    let current= head
    while (current !== null){
      sum+= current.val
      current=current.next
    }
    return sum 
  };



  //recursive, n time , n space

  const sumList2 = (head) => {
    if (head===null) return 0
    
    return head.val+sumList2(head.next)
    }