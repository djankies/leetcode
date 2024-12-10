/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return null;
    const seen = new Set([head.val]);
    let ptr = head;
    
    while (ptr.next) {
        if (seen.has(ptr.next.val)) {
            ptr.next = ptr.next.next;
        } else {
            seen.add(ptr.next.val);
            ptr = ptr.next
        }
    }
    
    return head;

};