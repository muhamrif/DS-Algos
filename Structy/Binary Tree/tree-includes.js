
//n time, n space
const treeIncludes = (root, target) => {
    if (root===null) return false
    if (root.val ===target)return true
   return treeIncludes(root.right, target)|| treeIncludes(root.left, target) 
  };