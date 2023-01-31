//leetcode problem #1


//n runtime, n space(because of the {})
function twosum (arr, target){

    let map ={}

    for (let i=0;i<arr.length;i++){

        let targetsum = target-(arr[i])
        
        if (map[targetsum]>=0){

            return [map[targetsum], i]

        }else{
            
            map[arr[i]]=i
        }
    }

    
    return false


}

// there is another method for this Q, 
//we use nested forloops to accomlpish the same resutl,
// that solution will be n^2 time and 1 space. 

console.log(twosum([1,2,3,4,5,6], 10))