//Time Comlexity - O(n^2), Space Complexity - O(1)

function twoNumberSum(array, target){

    for (let i=0;i<array.length;i++){
        for (let j=i+1;j<array.length;j++){
            if (array[i]+array[j]===target){
                return [array[i],array[j]]
            }
        }
    }
    return []
}

//___________________//

//Time Comlexity - O(n), Space Complexity - O(n)

function twoNumberSum(array, target){

    let nums = {}
 
    for(let i=0;i<array.length;i++){
     let match = target - array[i]
     if (nums[match]>=0){
       return [match, array[i]]
     }else{
         nums[array[i]]= true
     }
    }
 
     return []
    }

//___________________//

//Time Comlexity - O(nlogn), Space Complexity - O(1)

