/**
给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

 

示例：

输入: words = ["time", "me", "bell"]
输出: 10
说明: S = "time#bell#" ， indexes = [0, 2, 5] 。
 

提示：

1 <= words.length <= 2000
1 <= words[i].length <= 7
每个单词都是小写字母 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/short-encoding-of-words
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 题意解读：
 * 通过信息，S= "time#bell#" 和 indexes = [0, 2, 5]，恢复列表[time,me,bell]
 * 从0位置开始遍历字符串S，遇到#停止，得到time 
 * 从2位置开始遍历字符串S，遇到#停止，得到me 
 * 从5位置开始遍历字符串S，遇到#停止，得到bell
 * 问题，编码字符串S（which可以恢复列表）最短能有多短？
 * Trie https://zh.wikipedia.org/zh-hans/Trie
 * 在计算机科学中，trie，又称前缀树或字典树，是一种有序树，用于保存关联数组，其中的键通常是字符串。与二叉查找树不同，键不是直接保存在节点中，而是由节点在树中的位置决定。
 */
/**
 * 剔除重复词尾的思路，通过哈希表降低查询的复杂度(空间换时间)。
 * 对 words 中的每个元素的词尾做切片并比对，
 * 如果词尾出现在 words 中，则删除该元素。
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了100.00%的用户
 * 内存消耗 :43.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
  let hashSet = new Set(words)
  for (let item of hashSet) {
    for (let i = 1; i < item.length; i++) {
      // 切片，看看是否词尾在 hashSet 中，切片从1开始，只看每个单词的词尾
      let target = item.slice(i)
      console.log(item, i, target)
      hashSet.has(target) && hashSet.delete(target)
    }
  }
  let result = 0
  // 根据 hashSet 中剩余元素计算最终长度
  hashSet.forEach(item => result += item.length + 1)
  return result
}