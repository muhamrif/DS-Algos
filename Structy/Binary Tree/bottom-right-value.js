//iterative BFS, n time, n^2 space, because of the .shift()

const bottomRightValue = (root) => {
    let que = [root]
    let current = null
    while (que.length>0){
       current = que.shift()
      
      if(current.left) que.push(current.left)
      if(current.right)que.push(current.right)
    }
    return current.val

   
    
    
  };