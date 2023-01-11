//strat is using a queue to keep a track of visited nodes and it's children (FIFO)


//n^2 runtime(.shit is n runtime), n space


const beadthFirstValues = (root)=>{
    if (root===null)return []
  
    let result = []
    const queue = [root]

    while (queue.length>0){
        
        const current = queue.shift()

        result.push(current.val)

        if (current.left!== null) queue.push(current.left)

        if (current.right!==null) queue.push(current.right)

    }
    return result
}