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


//