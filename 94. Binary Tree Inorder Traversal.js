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
var inorderTraversal = function(root) {
    if(root === null) return [];
    let arr = [];
    arr = arr.concat(inorderTraversal(root.left));
    arr.push(root.val);
    arr = arr.concat(inorderTraversal(root.right));
    return arr;
};