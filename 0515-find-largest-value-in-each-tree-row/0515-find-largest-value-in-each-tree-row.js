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
var largestValues = function(root) {
    if (!root) return [];

    let queue = [root];
    let ans = []

    while (queue.length) {
        let newQueue = [];
        let maxVal = -Infinity;

        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            maxVal = (Math.max(maxVal, node.val));
            if (node.left) newQueue.push(node.left);
            if (node.right) newQueue.push(node.right);
        }

        queue = newQueue;
        ans.push(maxVal);
    }

    return ans;
};