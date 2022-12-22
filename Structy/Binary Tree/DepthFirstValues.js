//iterative strat is using a stack to keep a track of 'visited' nodes, and listing the children along with its own value.


//iterative n runtime, n space
const depthFirstValues2 = (root) => {
    let result = []
    let stack = [root]
    while (stack.length>0){
      const current = stack.pop()
     if (current!== null) {
      result.push(current.val)
      if (current.right) stack.push(current.right)
      if (current.left) stack.push(current.left)
     }
    }
    return result
  };

  //recursive n reuntime, n space

  const depthFirstValues = (root) => {
    if (root===null) return []
    const leftNodes = depthFirstValues(root.left)
    const rightNodes = depthFirstValues(root.right)
    return [root.val, ...leftNodes, ...rightNodes]
  };

  