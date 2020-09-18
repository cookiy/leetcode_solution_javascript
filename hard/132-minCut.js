/**
132. 分割回文串 II
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回符合要求的最少分割次数。

示例:

输入: "aab"
输出: 1
解释: 进行一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
 */
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let dp = new Array(s.length).fill(s.length);

    dp[0] = 0;
    for(let i = 1; i < dp.length; i++) {
        if(isPalindrome(0, i)) {
            dp[i] = 0;
            continue;
        }
        for(let j = 0; j < i; j++) {

            if(isPalindrome(j+1, i)) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[s.length-1];

    function isPalindrome(start, end) {
        let lo = start;
        let hi = end;

        while(lo < hi) {
            if(s[lo++] !== s[hi--]) return false;
        }
        return true;
    }
};

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let dp = new Array(s.length).fill(s.length);
  
    for(let i = 0; i < s.length; i++) {
      let j = 0;
      while(true) {
        if(i - j < 0 || i + j > s.length - 1) {
          break;
        }
        if(s[i-j] === s[i+j]) {
          if(i-j === 0) dp[i+j] = 0;
          else dp[i+j] = Math.min(dp[i+j], dp[i-j-1] + 1);
        } else {
          break;
        }
        j++;
      }
  
      j = 1;
      while(true) {
        if(i - j + 1 < 0 || i + j > s.length - 1) {
          break;
        }
        if(s[i-j+1] === s[i+j]) {
          if(i-j+1 === 0) dp[i+j] = 0;
          else dp[i+j] = Math.min(dp[i+j], dp[i-j] + 1);
        } else {
          break;
        }
        j++;
      }
    }
  
    return dp[s.length-1];
  }
