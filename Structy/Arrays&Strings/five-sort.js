
//n runtime , 1 space
const fiveSort = (nums) => {
    let i = 0
    let j = nums.length-1
    
    while (i<j){
      if (nums[j]===5){
        j--
      }else if (nums[i]=== 5){
         [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
        i++
      }else{
        i++
      }
      }
    return nums
  };