var palinPerm = function(string) {
    // create object literal to store charcount
    var chars = {};
    var currChar;
    var mulligan = false;
    var isPerm = true;
    // pump characters in, spaces not counted, all lowercase
    string.split('').forEach((char) => {
      if (char !== ' ') {
        currChar = char.toLowerCase();
        if (chars[currChar] === undefined) {
          chars[currChar] = 0;
        }
        chars[currChar]++;
      }
    });
    // check that all chars are even count, except for one exception
    Object.keys(chars).forEach((char) => {
      if (chars[char] % 2 > 0) {
      // if more than one exception, return false
        if (mulligan) {
          isPerm = false; // return in a forEach statment doesn't flow out of function scope
        } else {
          mulligan = true;
        }
      }
    });
    // if not return true
    return isPerm;
  };

  //Solution2

  function palinPerm(s) {
    const sanitized = s.toUpperCase().split(" ").join("");
    const freq = new Map();
    for (let i = 0; i < sanitized.length; i++) {
      const char = sanitized.charAt(i);
      const prevFreq = freq.get(char) || 0;
      freq.set(char, prevFreq + 1);
    }
    let oddCount = 0;
    for (let char of freq) {
      if (char[1] % 2 !== 0) {
        oddCount++;
      }
    }
    return oddCount < 2;
  }
  