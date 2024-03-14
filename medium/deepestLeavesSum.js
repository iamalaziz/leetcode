function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function constructTreeFromArray(arr, index) {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    const node = new TreeNode(arr[index]);
    node.left = constructTreeFromArray(arr, 2 * index + 1);
    node.right = constructTreeFromArray(arr, 2 * index + 2);

    return node;
}

function deepestLeavesSum(root) {
    let maxDepth = -1;
    let sum = 0;

    function dfs(node, depth) {
        if (node === null) {
            return;
        }

        if (depth > maxDepth) {
            maxDepth = depth;
            sum = node.val;
        } else if (depth === maxDepth) {
            sum += node.val;
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root, 0);
    return sum;
}

// Test the function
const arr = [1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8];
const root = constructTreeFromArray(arr, 0);
console.log(deepestLeavesSum(root)); // Output: 15
