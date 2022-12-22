// n^2 runtime, 1 space

const pairProduct = (numbers, targetProduct) => {
    for (let i =0;i<numbers.length;i++){
          for (let j=i+1;j<numbers.length;j++){
            if (numbers[i]*numbers[j]===targetProduct){
              return [i,j]
            }
          }
        }
    };


// n runtime, n space


const pairProduct2 = (numbers, targetProduct) => {
    let map ={}
     
     for (let i=0;i<numbers.length;i++){
       let num = numbers[i]
       let sum = targetProduct / num
       
       if (map[sum]>=0){
         return [map[sum],i]
       }else{
         map[num] = i
       }
     }
 };

