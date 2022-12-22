//iterative n runtime, 1 space

const longestStreak = (head) => {
 
    let current = head
    let prevVal =null
    let count = 0
    let max = 0
    
    while (current!==null){
      if (current.val===prevVal){
        count++
      }else{
        count = 1
      }
      if (count>max){
        max=count
      }
       prevVal =current.val
      current= current.next
      
    }
     return max
   };
   