/**

给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

示例 1:
输入:

0 0 0
0 1 0
0 0 0
输出:

0 0 0
0 1 0
0 0 0
示例 2:
输入:

0 0 0
0 1 0
1 1 1
输出:

0 0 0
0 1 0
1 2 1
注意:

给定矩阵的元素个数不超过 10000。
给定矩阵中至少有一个元素是 0。
矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 */



 /**
如果matrix[r][c] === 0，那么距离为 0
正反dp
情况1：水平向左移动 和 竖直向上移动
情况2：水平向右移动 和 竖直向下移动
*/

 /**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
let updateMatrix = (matrix)=> {
    let rows = matrix.length, cols = matrix[0].length
    let dp = new Array(rows).fill(Infinity).map(()=>new Array(cols).fill(Infinity))
    
    for(let r = 0; r < rows; r++){
      for (let c = 0; c < cols; c++) {
        if(matrix[r][c] === 0) dp[r][c] = 0
        else {
          if(r > 0) dp[r][c] = Math.min(dp[r][c], dp[r - 1][c] + 1)
          if(c > 0) dp[r][c] = Math.min(dp[r][c], dp[r][c - 1] + 1)
        }
      }
    }
  
    for(let r = rows - 1; r >= 0; r--){
      for (let c = cols - 1; c >= 0; c--) {
        if(r < rows - 1) dp[r][c] = Math.min(dp[r][c], dp[r + 1][c] + 1)
        if(c < cols - 1) dp[r][c] = Math.min(dp[r][c], dp[r][c + 1] + 1)
      }
    }
    return dp
};
