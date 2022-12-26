//give a root and a target, and have to find a path 


//depth first recursive, n^2 runtime, n space
const pathFinder2 = (root, target) => {
    if (root ===null) return null
    if (root.val ===target) return [root]
    const leftPath = pathFinder2(root.left, target)
    if (leftPath){
        return [root.val, ...leftPath]
    }
    const rightPath = pathFinder2(root.right, target)
    if (rightPath){
        return [root.val, ...rightPath]
    }
    return null   
}

//depth first using .push, n runtime, n space:

const pathFinder = (root, target) => {
    const result = pathFinderHelper(root, target);
    if (result === null) {
      return null;
    } else {
      return result.reverse();
    }
  };
  
  const pathFinderHelper = (root, target) => {
    if (root === null) return null;
    if (root.val === target) return [ root.val ];
    
    const leftPath = pathFinderHelper(root.left, target);
    if (leftPath !== null) {
      leftPath.push(root.val);
      return leftPath;
    }
    
    const rightPath = pathFinderHelper(root.right, target);
    if (rightPath !== null) {
      rightPath.push(root.val);
      return rightPath;
    }
    
    return null;
  };