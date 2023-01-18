//leetcode 217


//n runtime, n space
function duplicates(arr){
    let map = {}

    for (let i=0;i<arr.length;i++){
        if (!map[arr[i]]){
            map[arr[i]]=1
        }else{
            map[arr[i]]++
        }
    }

    for (let i in map){
        if (map[i]>1){
            return true
        }
    }

    return false
}

console.log(duplicates([1,2,3,1]))
console.log(duplicates([1,2,3,4,5,6,7,8]))