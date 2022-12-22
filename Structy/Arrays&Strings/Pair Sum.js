
// n runtime , n space
const pairSum = (numbers, targetSum) => {
    let map ={}
    
    for (let i=0;i<numbers.length;i++){
      let num = numbers[i]
      let sum = targetSum - num
      
      if (map[sum]>=0){
        return [map[sum],i]
      }else{
        map[num] = i
      }
    }
  };

// n^2 runtime, 1 space
  const pairSum2 = (numbers, targetSum) => {

    for (let i =0;i<numbers.length;i++){
      for (let j=i+1;j<numbers.length;j++){
        if (numbers[i]+numbers[j]===targetSum){
          return [i,j]
        }
      }
    }
  }