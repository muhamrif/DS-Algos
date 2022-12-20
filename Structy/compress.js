// n runtime, n space//

const compress = (s) => {
    let result =[]
    let i=0
    let j = 0
    
    while (j<=s.length){
      if (s[j]===s[i]){
        j++
      }else{
       let num = j-i
       if (num===1){
         result.push(s[i])
       }else{
         result.push(`${num}${s[i]}`)
       }
        i=j
      }
    }
    
    return result.join('')
  
  };