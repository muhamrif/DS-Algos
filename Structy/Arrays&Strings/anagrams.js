
// dont know the runtime for this
 const anagrams2 = (s1, s2) => {
    s1=s1.split('').sort().join('')
     s2=s2.split('').sort().join('')
     return s1===s2
   };




//(n+m) runtime, n space
const anagrams = (s1, s2) => {
    const count = {};
    for (let char of s1) {
      if (!(char in count)) {
        count[char] = 0;
      }
      count[char] += 1;
    }
    
    for (let char of s2) {
      if (count[char] === undefined) {
        return false;
      } else {
        count[char] -= 1;
      }
    }
    
    for (let char in count) {
      if (count[char] !== 0) {
        return false;
      }
    }
    
    return true;
  };