//iterative, n runtime, 1 space
function reverseLinkedList(head) {
 let current = head
  let prev = null

  while (current!==null){
    const next = current.next
    current.next =prev
    prev = current
    current = next
  }

  return prev
}

//recursive, n runtime, n space
function reverseLinkedList(head, prev = null) {
    if (head===null) return prev
    
      const next = head.next
      head.next=prev
      return reverseLinkedList(next, head)
      
    }