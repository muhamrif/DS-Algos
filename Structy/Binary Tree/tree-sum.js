//iterative DFS n time n space
const treeSum2 = (root) => {
    if (root===null)return 0
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
      return result.reduce((a,b)=>a+b)
  };
  

  //another DFS recursively 
  const treeSum = (root) => {
    if (root===null)return 0
  
    return root.val + treeSum(root.left) +treeSum(root.right)
  
  };