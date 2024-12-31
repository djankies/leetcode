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
    
    let queue = [root];
    const rightSide = [];
    
    while (queue.length) {
        let newQueue = [];
        
        rightSide.push(queue[queue.length - 1].val);
        
        for (let i = 0; i < queue.length; i++) {
            const left = queue[i].left;
            const right = queue[i].right;
            if (left) newQueue.push(left);
            if (right) newQueue.push(right);
        }

        queue = newQueue;
    }

    return rightSide;
};