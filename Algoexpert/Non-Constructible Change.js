//Time Comlexity - O(NlogN), Space Complexity - O(1) 

function nonConstructibleChange(coins) {
    // Write your code here.
    coins.sort((a,b)=>a-b)
  
    let min =0 //19
  
    // [1,1,2,3,5,7,22]
  
    for (let i =0;i<coins.length;i++){
       if (coins[i]>min+1){
          return min+1
      } 
      min += coins[i]
      
    }
    return min+1
  }
  //Nlogn time || O(1) space