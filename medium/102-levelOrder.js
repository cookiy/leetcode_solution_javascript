/**
102. 二叉树的层序遍历
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
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
var levelOrder = function(root) {
    const ret = [];
    if (!root) return ret;

    const list = [];
    list.push(root);
    while (list.length !== 0) {
        const currentLevelSize = list.length;
        ret.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            const node = list.shift();
            ret[ret.length - 1].push(node.val);
            if (node.left) list.push(node.left);
            if (node.right) list.push(node.right);
        }
    }
        
    return ret;
};
