const LinkedList = require("LinkedListX");
const printList = require("printList");

let deleteMidNode = function(node) {

  if(node !== null && node.next !== null) {
    node.value = node.next.value;
    node.next = node.next.next;
    }
};