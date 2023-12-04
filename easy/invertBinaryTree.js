function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

var invertTree = function (root) {
    if (root == null) return null

    let tempLeft = root.left
    root.left = root.right
    root.right = tempLeft

    invertTree(root.left)
    invertTree(root.right)

    return root
};

console.log(invertTree(tree));


