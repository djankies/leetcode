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
    let ptr = head;
    
    while (ptr.next) {
        if (ptr.val === ptr.next.val) {
            ptr.next = ptr.next.next;
        } else {
            ptr = ptr.next
        }
    }
    
    return head;

};