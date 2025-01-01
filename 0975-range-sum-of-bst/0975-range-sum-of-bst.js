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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (!root) return 0;
    let sum = 0;

    const val = root.val;
    if (val >= low && val <= high) sum += val;
    if (val > low) sum += rangeSumBST(root.left, low, high);
    if (val < high) sum += rangeSumBST(root.right, low, high);

    return sum;
};