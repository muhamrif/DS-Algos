//Forward

const LinkedList = require('LinkedList')
const printList = require('printList')

function sumLinkedListsForward(list1, list2) {
  if (!list1 && !list2) {
    return null
  }
  let length1 = length(list1)
  let length2 = length(list2)

  if (length1 > length2) {
    list2 = padList(list2, length1 - length2)
  } else if (length1 < length2) {
    list1 = padList(list1, length2 - length1)
  }

  const { head, nextDigitValue } = carryBase10(sumAndAppendNodes(list1, list2), 0)
  return nextDigitValue ? appendToStart(head, new LinkedList(nextDigitValue)) : head
}

function length(node) {
  let count = 0
  while (node) {
    count++
    node = node.next
  }
  return count
}

function padList(shortList, padding) {
  while (padding > 0) {
    shortList = appendToStart(shortList, new LinkedList(0))
    padding--
  }
  return shortList
}

function appendToStart(head, node) {
  node.next = head
  return node
}

function sumAndAppendNodes(node1, node2) {
  let value = (node1 ? node1.value : 0) + (node2 ? node2.value : 0)
  if (!node1.next && !node2.next) {
    return new LinkedList(value)
  }
  const {
    head,
    nextDigitValue
  } = carryBase10(sumAndAppendNodes(node1.next, node2.next), value)
  return appendToStart(head, new LinkedList(nextDigitValue))
}

function carryBase10(head, nextDigitValue) {
  if (head.value >= 10) {
    head.value = head.value % 10
    nextDigitValue += 1
  }
  return {
    head,
    nextDigitValue
  }
}


//recursion
function sumLinkedLists(node1, node2, carry=0){
    if(!node1 && !node2 && carry===0){
      return null
    }
    let value = carry
    value += node1 ? node1.value : 0
    value += node2 ? node2.value : 0
    const node  = new LinkedList(value%10)
    node.next = sumLinkedLists(
      node1 ? node1.next : null,
      node2 ? node2.next : null,
      value > 10 ? 1 : 0)
    return node
  }
  

//regual

var sumList = function(head1, head2) {
  
    var node1 = head1;
    var node2 = head2;
    var node3 = null;
    var head3 = null;
    
    var ones;
    var tens = 0;
    var sum;
    
    while (node1 !== null && node2 !== null) {
      if (node1 === null) {
        sum = node2.value;
      } else if (node2 === null) {
        sum = node1.value;
      } else {
        sum = node1.value + node2.value;
      }
  
      sum += tens;
      ones = sum % 10;
      if (node3 === null) {
        head3 = new LinkedList(ones);
        node3 = head3;
      } else {
        node3.next = new LinkedList(ones);
        node3 = node3.next;
      }
  
      tens = Math.floor(sum / 10);
  
      if (node1 !== null) {
        node1 = node1.next;
      }
  
      if (node2 !== null) {
        node2 = node2.next;
      }
  
    }
    if (tens > 0) {
      node3.next = new LinkedList(tens);
      node3 = node3.next;
    }
  
    return head3;
  };
  
  /* TEST */
  