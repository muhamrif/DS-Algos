// remiveDups redone
const LinkedList = require("LinkedListX");

function removeDuplicates(list) {
  const _set = new Set();
  let cur = list.head;
  let prev = null;
  while (cur) {
    if (_set.has(cur.value)) {
      // duplicate found
      // de-link it from the list
      // cur jumps next but previous stays
      // right behind cur (as always)
      let elem = cur;
      prev.next = cur.next;
      cur = cur.next;
      elem.next = null;
    }
    else {
      // add to the set
      _set.add(cur.value);
      prev = cur;
      cur = cur.next;
    }
  }

  return list;
}