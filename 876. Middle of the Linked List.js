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
var middleNode = function(head) {
    let val = head
    let len = 0
    let counter = 1
    let res = head

    while( val ){
        val = val.next
        len++
    }

    let pivot = Math.floor(len/2)

    while( counter <= pivot ){
        res = res.next
        counter++
    }

    return res
};