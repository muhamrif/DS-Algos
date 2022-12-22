
//iterative, n runtime, 1 space
const isUnivalueList2 = (head) => {
  let ans = head.val
  let current = head
  while (current!== null){
    if (current.val !== ans){
      return false
    }
    current= current.next
  }
  return true
};


//recursive, n runtime, n space
const isUnivalueList =(head, prev=null)=>{
    if (head === null) return true
    if (head.val===prev||prev===null){
      return isUnivalueList(head.next, head.val)
    }else{
      return false
    }
  }