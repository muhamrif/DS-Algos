// iterative n runtime, n space

const createLinkedList2 = (values) => {
    // todo
    let prev = new Node(null)
    let tail = prev
    
    for (let i =0;i<values.length;i++){
      tail.next= new Node(values[i])
      tail = tail.next
      
  
    }
    return prev.next
      
  };

  //recursive n runtime, n space

  const createLinkedList =(values, i =0)=>{
    if (values.length===i) return null

    const head = new Node(values[i])
    head.next= createLinkedList(values, i+1)
    return head
  }