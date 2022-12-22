


// iterative n time, 1 space


const insertNode = (head, value, index) => {
    if (index===0){
      const newhead = new Node(value)
      newhead.next = head
      return newhead
    }
      let count = 0
      let current = head
      
      while (current!== null){
        if (count===index-1){
          const next = current.next
          current.next = new Node(value) 
          current.next.next=next
        }
        count++
        current = current.next
        
      }
      return head
    };
    


//recursive n time, n space
const insertNode2 = (head, value, index, count = 0) => {
    if (index===0){
      const newhead = new Node(value)
      newhead.next = head
      return newhead
    }
    
      if (count ===index-1){
        const next = head.next
        head.next = new Node(value)
        head.next.next= next
        return head
      }
      insertNode2(head.next, value, index, count+1)
      return head
    };