//2n = n runtime, n space

const mostFrequentChar = (s) => {
    // todo
    let map= {}
    
    for (let i=0;i<s.length;i++){
      if (!map[s[i]]){
        map[s[i]]=1
      }else{
        map[s[i]]++
      }
    }
    let count = 0
    let alph = ''
    
    for (let x in map){
      if(map[x]>count){
        alph = x
        count = map[x]
      }
    }
    
    return alph
  };