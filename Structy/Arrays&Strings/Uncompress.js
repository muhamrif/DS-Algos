
//(nm) runtime , (nm)space// n = number of groups, m = max number for any group

const uncompress = (s) => {
    let result = [];
    const numbers = '0123456789';
    let i = 0;
    let j = 0;
    while (j < s.length) {
      if (numbers.includes(s[j])) {
        j++;
      } else {
        const num = Number(s.slice(i, j));
        result.push(s[j].repeat(num));
        j++;
        i=j;
      }
    }
    return result.join('');
  };