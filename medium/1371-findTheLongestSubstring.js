/**
1371. 每个元音包含偶数次的最长子字符串
给你一个字符串 s ，请你返回满足以下条件的最长子字符串的长度：每个元音字母，即 'a'，'e'，'i'，'o'，'u' ，在子字符串中都恰好出现了偶数次。

 

示例 1：

输入：s = "eleetminicoworoep"
输出：13
解释：最长子字符串是 "leetminicowor" ，它包含 e，i，o 各 2 个，以及 0 个 a，u 。
示例 2：

输入：s = "leetcodeisgreat"
输出：5
解释：最长子字符串是 "leetc" ，其中包含 2 个 e 。
示例 3：

输入：s = "bcbcbc"
输出：6
解释：这个示例中，字符串 "bcbcbc" 本身就是最长的，因为所有的元音 a，e，i，o，u 都出现了 0 次。
 

提示：

1 <= s.length <= 5 x 10^5
s 只包含小写英文字母。
通过次数3,961提交次数7,322

1. Represent the counts (odd or even) of vowels with a bitmask.

2. Precompute the prefix xor for the bitmask of vowels and then get the longest valid substring.
 */

/**
 * 位运算+哈希+状态压缩+前缀和+动态规划
*/

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  const n = s.length
  const pos = new Array(1 << 5).fill(-1)
  let ans = 0, status = 0
  pos[0] = 0
  for (let i = 0; i < n; ++i) {
    const ch = s.charAt(i)
    if (ch === 'a') {
      status ^= 1 << 0
    } else if (ch === 'e') {
      status ^= 1 << 1
    } else if (ch === 'i') {
      status ^= 1 << 2
    } else if (ch === 'o') {
      status ^= 1 << 3
    } else if (ch === 'u') {
      status ^= 1 << 4
    }
    if (~pos[status]) {
      ans = Math.max(ans, i + 1 - pos[status])
    } else {
      pos[status] = i + 1
    }
  }
  return ans
}

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  var state = new Array(32)
  var cur = 0
  var ans = 0
  state[0] = -1
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'a':
        cur ^= 1
        break
      case 'e':
        cur ^= 2
        break
      case 'i':
        cur ^= 4
        break
      case 'o':
        cur ^= 8
        break
      case 'u':
        cur ^= 16
        break
      default:
        break
    }
    if (state[cur] === undefined) {
      state[cur] = i
    } else {
      ans = Math.max(ans, i - state[cur])
    }
  }
  return ans
}

/**
 * 异或记录偶数
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function (s) {
  let map = {}
  let max = 0
  let o = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    let num = s[i].charCodeAt(0) - 96
    if (o[s[i]]) {
      sum = sum ^ num
    }

    if (map[sum] === undefined) {
      map[sum] = i
    }
    if (sum === 0) {
      max = Math.max(max, i + 1)
    } else {
      if (map[sum] !== undefined) {
        max = Math.max(max, i - map[sum])
      }
    }
  }
  return max
}
