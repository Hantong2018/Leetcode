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
var postorderTraversal = function(root) {
    if(root === null) return [];
    let arr = [];
    arr = arr.concat(postorderTraversal(root.left));
    arr = arr.concat(postorderTraversal(root.right));
    arr.push(root.val);
    return arr;
};