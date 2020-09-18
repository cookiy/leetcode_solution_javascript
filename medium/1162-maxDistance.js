/**
你现在手里有一份大小为 N x N 的『地图』（网格） grid，上面的每个『区域』（单元格）都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，你知道距离陆地区域最远的海洋区域是是哪一个吗？请返回该海洋区域到离它最近的陆地区域的距离。

我们这里说的距离是『曼哈顿距离』（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个区域之间的距离是 |x0 - x1| + |y0 - y1| 。

如果我们的地图上只有陆地或者海洋，请返回 -1。

 

示例 1：



输入：[[1,0,1],[0,0,0],[1,0,1]]
输出：2
解释： 
海洋区域 (1, 1) 和所有陆地区域之间的距离都达到最大，最大距离为 2。
示例 2：



输入：[[1,0,0],[0,0,0],[0,0,0]]
输出：4
解释： 
海洋区域 (2, 2) 和所有陆地区域之间的距离都达到最大，最大距离为 4。
 

提示：

1 <= grid.length == grid[0].length <= 100
grid[i][j] 不是 0 就是 1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/as-far-from-land-as-possible
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /** 
  * 分析题意：求哪一块海洋，到离他最近的陆地距离最远，返回这个最远值，没有返回 0
  * 思路：
  * 1. 先遍历一次矩阵，找出所有的陆地，放到队列中
  * 2. 如果队列长度等于网格的个数或者为0，说明全是陆地或者全是海洋 直接返回 -1
  * 3. 遍历陆地队列，对每一块陆地使用 BFS，终止条件：网格重复访问或者越界，
  * 遍历队列的层数就是我们要求的答案
  * DFS和BFS的区别，DFS是一头扎到底，而BFS是扩散。
  * BFS可以从多个位置同时向外扩散，扩散一定是平均的，每个陆地向外扩散的速率也是一样的。 这个扩散的过程，就是曼哈顿距离的叠加过程。
 */
  
/**
 * BFS
 * 执行用时 :136 ms, 在所有 JavaScript 提交中击败了67.50%的用户
 * 内存消耗 :49.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    if(!grid.length === 0 || grid[0].length === 0) return -1;
    let ans = -1,
        land = [],
        rowLimit = grid.length,
        colLimit = grid[0].length;
    // 找到所有陆地放到队列中
    for (let i = 0; i < rowLimit; i++) {
        for (let j = 0; j < colLimit; j++) {
          if (grid[i][j] == 1) land.push( [i, j] );
        }
    }
    // 全是海洋或者全是陆地
    if (land.length === rowLimit * colLimit) {
        return -1;
    }
    // 对每一块陆地进行 BFS，已访问过的格子标记成陆地做一个去重
    while (land.length > 0) {
        let size = land.length;
        while (size > 0) {
          size--;
          let curr = land.shift();
          
          // 向矩阵的四个方向搜索
          // 终止条件：越界或者找到一块陆地
          let ways = [ [-1, 0], [0, 1], [1, 0], [0, -1] ];
          for (let i = 0; i < 4; i++) {
            let r = curr[0] + ways[i][0],
                c = curr[1] + ways[i][1];
            // 越界 -> 跳过此方向
            if (
              r < 0 || r >= rowLimit || c < 0 || c >= colLimit ||
              grid[r][c] === 1
            ) continue;
            
            // 如果找到的是海洋，继续加入到队列中，距离 + 1
            if (grid[r][c] === 0) {
              land.push( [r, c] );
              grid[r][c] = 1;
            }
          }
        }
        ans++;
      }
    return ans;
};