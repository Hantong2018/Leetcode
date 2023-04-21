/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Visit each node, marking it as seen
    // Return when a visited node is reached again
    let current = head;
    while (current != null) {
        if (current.visited) return true;
        
        current.visited = true;
        current = current.next;
    }
    
    // We safely reached the end
    return false;
};