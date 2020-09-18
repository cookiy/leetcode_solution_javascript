/**给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/symmetric-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) {
         return true
    }
    let stack = [root, root],
        left = null,
        right = null;
    while (stack.length) {
        left = stack.shift()
        right = stack.shift()
        if (left === null && right === null) {
            continue;
        } else if(left === null || right === null) {
            return false;
        } else if(left.val !== right.val) {
            return false;
        }
        stack.push(left.left, right.right, left.right, right.left);
    }
    return true
};