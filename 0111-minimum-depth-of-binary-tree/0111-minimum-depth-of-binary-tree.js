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
var minDepth = function (root) {
    const dfs = (node) => {
        if (!node) return Infinity;
        if (!node.left && !node.right) return 1;
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        return Math.min(left, right) + 1;
    }
    
    return root ? dfs(root) : 0;
};