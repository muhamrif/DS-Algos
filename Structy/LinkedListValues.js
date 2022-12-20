
//n runtime, n space
//iterative
const linkedListValues = (head) => {
    // todo
    let arr = []
    let current=head
    while (current !== null){
      arr.push(current.val)
      current=current.next
      
    }
    return arr
  };
  


  //recursive
  const linkedListValues2 = (head) => {
    // todo
    let values = []
      _linkedListValues(head, values)
    return values
  };
  
  const _linkedListValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    _linkedListValues(head.next, values);
  };