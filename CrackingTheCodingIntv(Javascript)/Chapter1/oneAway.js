var oneAway = function(string1, string2) {
    // insert a char for str1 -> remove a char for str2
    var checkOneMissing = function(first, second) {
      if (first.length !== second.length - 1) {
        return false;
      } else {
        var mulligan = false;
        var fP = 0; // first Pointer
        var sP = 0; // second Pointer
        while (fP < first.length) {
          if (first[fP] !== second[sP]) {
            if (mulligan) {
              return false;
            } else {
              mulligan = true;
              sP++; // second length is longer
            }
          } else {
            fP++;
            sP++;
          }
        }
        return true;
      }
    };
  
    var checkOneDiff = function(first, second) {
      if (first.length !== second.length) {
        return false;
      } else {
        var mulligan = false;
        var fP = 0; // first Pointer
        var sP = 0; // second Pointer
        while (fP < first.length) {
          if (first[fP] !== second[sP]) {
            if (mulligan) {
              return false; // more than one mismatch
            } else {
              mulligan = true; // use up mulligan
            }
          }
          fP++;
          sP++;
        }
        return true;
      }
    };
    return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
  };
  
  