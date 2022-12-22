
//iterative, n time, n space
const removeNode = (head, targetVal) => {
    if (head.val===targetVal)return head.next
    let current = head
    let prev = null
    while (current!== null){
      if(current.val===targetVal){
        prev.next=current.next
        break
      }
      prev=current
        current= current.next
      
    }
    return head
  };

//   recursive n time, n space

const removeNode2 = (head, targetVal)=>{
    if (head ===null)return null
    if (head.val===targetVal) return head.next
    
    head.next = removeNode2(head.next,targetVal)
    return head
  }