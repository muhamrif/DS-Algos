
//n runtime, 1 space
const getNodeValue = (head, index) => {
    let counter = 0
    
    let current = head
    while (current!==null){
       if (counter===index) return current.val
      current= current.next
      counter++
     
      
    }
    return null
  };



//n runtime, n space//recursive
  const getNodeValue2 = (head, index) => {
    if (head===null) return null
     if (index===0) return head.val
     return getNodeValue2(head.next, index-1)
   };