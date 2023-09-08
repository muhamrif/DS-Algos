var LinkedList = require('./../util/LinkedList');

var loopDetection = (head) => {
  // The null checking code will handle lists with no loops.
  if (!head || !head.next) return null
  
  var hare = head
  var tortoise = head
  
  do {
    hare = hare.next
    tortoise = tortoise.next
    if (!hare || !hare.next) return null
    hare = hare.next
  } while (hare !== tortoise)
  
  tortoise = head
  
  while (hare !== tortoise) {
    hare = hare.next
    tortoise = tortoise.next
  }
  
  return hare
};