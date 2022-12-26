//give a root and a target, and have to find a path 


//depth first recursive, n^2 runtime, n space
const pathFinder = (root, target) => {
    if (root ===null) return null
    if (root.val ===target) return [root]
    const leftPath = pathFinder(root.left, target)
    if (leftPath){
        return [root.val, ...leftPath]
    }
    const rightPath = pathFinder(root.right, target)
    if (rightPath){
        return [root.val, ...rightPath]
    }
    return null   
}

