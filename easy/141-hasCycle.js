/**
给定一个链表，判断链表中是否有环。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

 

示例 1：

输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。


示例 2：

输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。


示例 3：

输入：head = [1], pos = -1
输出：false
解释：链表中没有环。


 

进阶：

你能用 O(1)（即，常量）内存解决此问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */
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

/** 解一：

由上到下给每一层遍历到的结点做上标记，如果在下一个结点中出现了这个标记，则表示存在环形结构。如果不想篡改原始数据，可以先用temp保存。
*/

var hasCycle = function(head) {
    while(head){
        if (head.val==='rhinoc.top') return true;
        else head.val='rhinoc.top';
        head = head.next;
    }
    return false
};
/**解二：

利用JSON.stringify()不能字符串化含有循环引用的结构。 */


var hasCycle = function(head) {
    try{
        JSON.stringify(head);
        return false;
    }
    catch(err){
        return true;
    }
};
/** 解三：

（双指针法）设置一快一慢两个指针，快指针一次走两步到.next.next，慢指针一次走一步到.next，如果链表不存在环形结构，那么快指针和慢指针不会相遇。如果存在环形结构，快指针总会和慢指针相遇。*/


var hasCycle = function(head) {
    if(head === null || head.next === null) return false;
    var slow = head;
    var fast = head.next;
    while (slow != fast){
        if (fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};