/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const less = (p.val < root.val) && (q.val < root.val)
    if (less) return lowestCommonAncestor(root.left,p,q)

    const bigger = (p.val > root.val) && (q.val > root.val)
    if (bigger) return lowestCommonAncestor(root.right,p,q)
    
    return root
};