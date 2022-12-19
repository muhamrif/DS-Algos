//Time Comlexity - O(nlogn), Space Complexity - O(1)

function sortedSquaredArray(array) {
    return array.map(x => x**2).sort((a,b)=>a-b)
  }



  //____________________//

  //Time Comlexity - O(N), Space Complexity - O(N)

  function sortedSquaredArray(array) {
    let sorted = []
      
  // [-4,-3,-2,-1,0,1,2,3,4]
  
    let rightp = array.length-1
    let leftp = 0
    
    for (let i=0;i<array.length;i++){ //O(N)
      
      let leftsq = array[leftp]**2
      let rightsq = array[rightp]**2
      
      if (array[rightp]**2 > array[leftp]**2){
        sorted.push(rightsq) //O(1)
        rightp--
      }else {
        sorted.push(leftsq) //O(1)
        leftp++
      } 
        
    }
    
    return sorted.reverse() //O(N)
  }
  
  
  // 2N = N
  //O(N) runtime || O(N) spacetime


  //_______________________________//
  
  //this one is without reverse, soo instead of 2n its just 1n
  
//Time Comlexity - O(N), Space Complexity - O(N)

  function sortedSquaredArray(array) {
 let result = []  //O(N) space
  let left = 0;
  let right = array.length - 1;

  for (let i = array.length - 1; i >=0 ; i--) { //O(N) runtime
    let leftsq = array[left] ** 2;
    let rightsq = array[right] ** 2;

    if (rightsq > leftsq) {
      result[i] = rightsq;
      right--;
    } else {
      result[i] = leftsq;
      left++;
    }
  }
  
  return result;
}


//O(N) runtime || O(N) space