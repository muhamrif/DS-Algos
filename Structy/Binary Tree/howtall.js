//check how tall is the tree, only given is the root node, we have to see how many nodeswe have to go through to get to the leaf node



//recursive, n runtime, n space
const howHigh = (node) => {
    if (node === null) return -1;
  
    const leftHeight = howHigh(node.left);
    const rightHeight = howHigh(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
    
  };