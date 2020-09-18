/**
107. 二叉树的层次遍历 II
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {

};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const ret = []
    if (!root) return ret
    
    const list = []
    list.push({ node: root, level: 0 })
    while (list.length > 0) {
      const { node, level } = list.shift()
      if (!ret[level]) {
        ret.unshift([])
      }
      ret[0].push(node.val)
      node.left && (list.push({ node: node.left, level: level + 1 }))
      node.right && (list.push({ node: node.right, level: level + 1 }))
    }
    return ret
  }
  