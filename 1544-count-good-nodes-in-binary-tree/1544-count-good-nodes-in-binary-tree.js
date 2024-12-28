/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    const dfs = (node, greatest) => {
        if (!node) return 0;

        const left = dfs(node.left, Math.max(node.val, greatest));
        const right = dfs(node.right, Math.max(node.val, greatest));
        let result = left + right;

        if (node.val >= greatest) result++;

        return result;
    }

    return dfs(root, -Infinity); 
};