//leetcode 1



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

console.log(twosum([1,2,3,4,5,6], 10))