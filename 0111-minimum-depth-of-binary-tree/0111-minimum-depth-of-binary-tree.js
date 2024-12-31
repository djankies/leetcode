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
    if (!root) return 0;
    
    const queue = [{ node: root, depth: 1 }];
    
    while (queue.length > 0) {
        const { node, depth } = queue.shift();
        
        if (!node.left && !node.right) {
            return depth;
        }
        
        if (node.left) queue.push({ node: node.left, depth: depth + 1 });
        if (node.right) queue.push({ node: node.right, depth: depth + 1 });
    }
};
