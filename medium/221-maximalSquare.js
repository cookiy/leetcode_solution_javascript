/**
221. 最大正方形
在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

示例:

输入: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

输出: 4
 */

/**
最大正方形 => 最大正方形的边长 => 右下角记录最大边长 => 复用已经遍历了的状态，即左，上，左上中最小的值+1

1. 找状态：dp[i][j]表示(i,j)位置的最大正方形边长 右下角
2. 状态转换方程dp[i][j] = min(左，上，左上) + 1

 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let maxSize = 0;
    let dp = new Array(matrix.length);
    for (let i = 0; i < dp.length; i++) {
      dp[i] = new Array(matrix[i].length).fill(0);
    }
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === '1') {
          if (i == 0 || j === 0) dp[i][j] = 1;
          else
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
          maxSize = Math.max(maxSize, dp[i][j]);
        }
      }
    }
    return maxSize ** 2;
  };