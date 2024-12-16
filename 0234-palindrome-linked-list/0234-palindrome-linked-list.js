/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let prev = null;
    let curr = head;
    let stack = [];

    while (curr) {
        stack.push(curr.val);
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    head = prev;

    for (let i = 0; i < stack.length; i++) {
        if (stack[i] !== head.val) return false;
        head = head.next;
    }

    return true;
};