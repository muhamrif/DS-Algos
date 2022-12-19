//Time Comlexity - O(n), Space Complexity - O(1)

function isValidSubsequence(array, sequence) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === sequence[counter]) counter++;
      if (counter === sequence.length) return true;
    }
    return false;
  }