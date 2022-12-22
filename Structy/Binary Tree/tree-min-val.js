
//dfs, n time, n sapce
const treeMinValue = (root) => {
    // todo
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
        return Math.min(...result)
  };