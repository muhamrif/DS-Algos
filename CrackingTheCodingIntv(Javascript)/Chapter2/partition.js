var LinkedList = function(value) {
    this.value = value;
    this.next = null;
  };
  
  var partition = function(head, partition) {
    // approach is to create left and right threads
    // and attach nodes with values less than partition value to the left
    // and nodes with vallues more than partition value to the right
    var left;
    var middle;
    var right;
    var currLeft = null;
    var currMiddle = null;
    var currRight = null;
  
    var node = head;
    while (node !== null) {
      if (node.value < partition) {
        if (currLeft === null) {
          left = node;
          currLeft = left;
        } else {
          currLeft.next = node;
          currLeft = currLeft.next;
        }
      } else if (node.value === partition) {
        if (currMiddle === null) {
          middle = node;
          currMiddle = middle;
        } else {
          currMiddle.next = node;
          currMiddle = currMiddle.next;
        }
      } else {
        if (currRight === null) {
          right = node;
          currRight = right;
        } else {
          currRight.next = node;
          currRight = currRight.next;
        }
      }
      node = node.next;
    }
    currRight.next = null;
    // connect the left values with those matching the partition value
    currLeft.next = middle;
    // connect the middle with the right partitions
    currMiddle.next = right;
    return left; // return head of new linkedList
  };
  