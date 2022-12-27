// given a tree check how many time the target val is present in the tree


//recursive DFS, n runtime, n space

const treeValCount2 = (root,target)=>{
    if (root===target) return 0
    const match = root.val=== target? 1: 0
    return match + treeValCount2(root.left, target) + treeValCount2(root.right, target)
}

//iterative breadth first, n^2 time, n space

const treeValueCount = (root, target) => {
    if (root=== null) return 0
    let count = 0
    const que = [root]
    while(que.length>0){
      const current = que.shift()
      if (current.val===target) count++
      if (current.left!==null)que.push(current.left)
      if (current.right!==null)que.push(current.right)
    }
    return count
  };

  //iterative depth first, n runtime, n space

  const treeValueCount3 = (root, target) => {
    if (root=== null) return 0
    let count = 0
    const que = [root]
    while(que.length>0){
      const current = que.pop()
      if (current.val===target) count++
      if (current.left!==null)que.push(current.left)
      if (current.right!==null)que.push(current.right)
    }
    return count
  };