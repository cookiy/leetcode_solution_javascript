
/**
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-right-side-view
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root==null)
      return []
    var arr=[]
    var res=[]
    arr.push(root)
  
    while(arr.length>0){
      res.push(arr[arr.length-1].val)
      var len=arr.length
      while(len>0){
        var now=arr.shift()
        if(now.left!=null)
          arr.push(now.left)
        if(now.right!=null)
          arr.push(now.right)
        len--
      }
    }
    return res;
  };