

//iterative solution not optimized 

const addLists1 = (head1, head2) => {
    let current1 = head1
      let current2 = head2 
      let sum1 = ''
      let sum2 = ''
      
      while (current1!== null ){
        sum1+= current1.val
        current1=current1.next
      }
       while (current2!== null ){
        sum2+= current2.val
        current2=current2.next
      }
      sum1=sum1.split('').reverse().join('')
       sum2=sum2.split('').reverse().join('')
      
      let total = (Number(sum1)+Number(sum2))+''
      total = total.split('').reverse()
      
      let prev = new Node(null)
      let tail = prev
      for (let i =0;i<total.length;i++){
        tail.next = new Node(total[i])
        tail=tail.next
      }
      
      return prev.next
      
    };


    //iterative optimised  max(n,m) time , max(n,m) space:  (whichever is larger, either head1 .lenght, or head2.lenght)
    const addLists2 = (head1, head2) => {
        const dummy = new Node(null)
        let tail = dummy
        let carry = 0 
        let current1 = head1
        let current2 = head2
        
        while (current1 !== null || current2 !== null || carry ===1){
          const val1 = current1 ===null ? 0 : current1.val
          const val2 = current2 ===null ? 0 : current2.val
          
          const sum = val1 + val2 + carry
          carry = sum >9 ? 1: 0
          const digit = sum %10
          
          if(current1!== null) current1=current1.next
          if (current2!==null) current2 = current2.next
          
          tail.next = new Node(digit)
          tail = tail.next
      
          }
        
        return dummy.next
      };




    // recursive max(n,m) time , max(n,m) space:  (whichever is larger, either head1 .lenght, or head2.lenght)
  

    const addLists = (head1, head2, carry = 0) => {
        if (head1===null && head2===null && carry===0) return null
        
        const val1 = head1 ===null ? 0 : head1.val
        const val2 = head2 ===null ? 0 : head2.val
        
        const sum = val1 + val2 + carry
        const nextCarry = sum>9 ? 1 : 0
        const digit = sum % 10
        
        const resultNode = new Node(digit)
        
        const next1 = head1===null ? null : head1.next
        const next2 = head2===null ? null : head2.next
        
        resultNode.next = addLists(next1, next2, nextCarry)
        return resultNode
      };