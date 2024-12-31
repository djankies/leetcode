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
var maxAncestorDiff = function(root) {
    const dfs = (node, min, max) => {
        if (!node) return max - min;
        
        min = Math.min(min, node.val);
        max = Math.max(max, node.val);
        
        const left = dfs(node.left, min, max);
        const right = dfs(node.right, min, max);
        
        return Math.max(left, right);
    }
    
    return dfs(root, root.val, root.val);
};