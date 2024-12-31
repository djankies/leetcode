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
 * @return {number[]}
 */
var rightSideView = function(root) {
        if (!root) return [];
        const queue = new Array(100);
        let queueStart = 0;
        let queueEnd = 0;
        const rightSide = [];
        
        queue[queueEnd++] = root;
        
        while (queueEnd > queueStart) {
            const levelSize = queueEnd - queueStart;
            
            for (let i = 0; i < levelSize; i++) {
                const node = queue[queueStart++];
                if (i === levelSize - 1) {
                    rightSide.push(node.val);
                }
                if (node.left) queue[queueEnd++] = node.left;
                if (node.right) queue[queueEnd++] = node.right;
            }
        }
        return rightSide;
    }