
// nm time, min of (n,m) space, whichever is the shortest array would be the space in worst case.
const intersection = (a, b) => {
    let result = []
    
    for (let i=0;i<a.length;i++){
      if (b.includes(a[i])){
        result.push(a[i])
      }
    }
     return result
   };


   //using set:
   //nm time, n space.
   const intersection2 = (a, b) => {
    const result = [];
    const setA = new Set(a);
    for (let item of b) {
      if (setA.has(item)) {
        result.push(item);
      }
    }
    return result;
  };