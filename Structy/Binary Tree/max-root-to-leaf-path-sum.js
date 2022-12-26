//recursion is preferable for path finding questions 






const maxPathSum = (root) => {
    if (root===null) return -Infinity
    if (root.left ===null && root.right===null) return root.val
   const maxChild =  Math.max(
        maxPathSum(root.left),
        maxPathSum(root.right)
    )
     return root.val + maxChild

}