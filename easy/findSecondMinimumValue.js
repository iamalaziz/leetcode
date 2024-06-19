var findSecondMinimumValue = function (root) {
    let arr = []
    const inOrder = (root => {
        if (root) {
            arr.push(root.val)
            inOrder(root.left)
            inOrder(root.right)
        }
    })
    inOrder(root)
    arr = [...new Set(arr)]
    if (arr[0] == arr[arr.length - 1]) {
        return -1
    }
    arr.sort((a, b) => a - b)
    return arr[1]
};