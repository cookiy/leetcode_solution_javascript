/**
764. 最大加号标志
在一个大小在 (0, 0) 到 (N-1, N-1) 的2D网格 grid 中，除了在 mines 中给出的单元为 0，其他每个单元都是 1。网格中包含 1 的最大的轴对齐加号标志是多少阶？返回加号标志的阶数。如果未找到加号标志，则返回 0。

一个 k" 阶由 1 组成的“轴对称”加号标志具有中心网格  grid[x][y] = 1 ，以及4个从中心向上、向下、向左、向右延伸，长度为 k-1，由 1 组成的臂。下面给出 k" 阶“轴对称”加号标志的示例。注意，只有加号标志的所有网格要求为 1，别的网格可能为 0 也可能为 1。

 

k 阶轴对称加号标志示例:

阶 1:
000
010
000

阶 2:
00000
00100
01110
00100
00000

阶 3:
0000000
0001000
0001000
0111110
0001000
0001000
0000000
 

示例 1：

输入: N = 5, mines = [[4, 2]]
输出: 2
解释:

11111
11111
11111
11111
11011

在上面的网格中，最大加号标志的阶只能是2。一个标志已在图中标出。
 

示例 2：

输入: N = 2, mines = []
输出: 1
解释:

11
11

没有 2 阶加号标志，有 1 阶加号标志。
 

示例 3：

输入: N = 1, mines = [[0, 0]]
输出: 0
解释:

0

没有加号标志，返回 0 。
 

提示：

整数N 的范围： [1, 500].
mines 的最大长度为 5000.
mines[i] 是长度为2的由2个 [0, N-1] 中的数组成.
(另外,使用 C, C++, 或者 C# 编程将以稍小的时间限制进行​​判断.)
 
 */

var orderOfLargestPlusSign = function(n, mines) {
    // 创建 N * N 的网格，每个格子表示最大的阶数，初始化时都为 n（n 是必然不可达到的阶数）
    const t = new Array(n).fill(0).map(() => new Array(n).fill(n));
  
    // 将 mines 中为 0 的格子写入值
    mines.forEach(a => t[a[0]][a[1]] = 0);
  
    // 遍历 第 i 行以及第 i 列
    // 对于行，将会从上到下，依次计算每行的从左以及从右的连续非 0 值
    // 对于列，将会从左到右，依次计算每列的从上以及从下的连续非 0 值
    // 完成循环时，必然将所有格子的四个方向的连续非 0 值计算了一遍
    // 并且通过每次方向得到的值，与原本格子所存的值进行比较并更新，即可得到每个格子四个方向连续非 0 值的最小值，即为该格子的最大阶数
    for (let i = 0; i < n; i++) {
      // 存放四个方向目前的连续非 0 的最大值
      let [l, r, u, d] = [0, 0, 0, 0];
      
      // l：遍历第 i 行从左到右连续非 0 的值
      // r：遍历第 i 行从右到做连续非 0 的值
      // u：遍历第 i 列从上到下连续非 0 的值
      // d：遍历第 i 列从下到上连续非 0 的值
      for (let j = 0, k = n - 1; j < n; j++, k--) {
        // 如果 遇到了 0，将对应的 l,r,u,d 重置为 0，表示连续的非 0 已经断裂，需要重新计数
        l = t[i][j] && l + 1;
        r = t[i][k] && r + 1;
        u = t[j][i] && u + 1;
        d = t[k][i] && d + 1;
  
        // 如果当前得到的 l,r,u,d 值比原有值小
        // 一种可能是，原本存的值是默认值
        // 另一种可能是，曾经的某个方向得到的连续非 0 长度比当前方向的连续非 0 长度大，由题意知，这里需要取较小值
        if (l < t[i][j]) t[i][j] = l;
        if (r < t[i][k]) t[i][k] = r;
        if (u < t[j][i]) t[j][i] = u;
        if (d < t[k][i]) t[k][i] = d;
      }
    }
  
    // 求得所有格子所存的最大值
      return Math.max(...t.map(v => Math.max(...v)));
  }