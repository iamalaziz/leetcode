const bstToGst = (root) => {
    let currSum = 0

    const dfs = (node) => {
        if(!node) return

        dfs(node.right)
        currSum += node.val
        node.val = currSum
        dfs(node.left)
    }

    dfs(root)

    return root
}