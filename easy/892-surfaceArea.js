/**
在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

请你返回最终形体的表面积。

 

示例 1：

输入：[[2]]
输出：10
示例 2：

输入：[[1,2],[3,4]]
输出：34
示例 3：

输入：[[1,0],[0,2]]
输出：16
示例 4：

输入：[[1,1,1],[1,0,1],[1,1,1]]
输出：32
示例 5：

输入：[[2,2,2],[2,1,2],[2,2,2]]
输出：46
 

提示：

1 <= N <= 50
0 <= grid[i][j] <= 50

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/surface-area-of-3d-shapes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
    本质上一个容拆原理[https://baike.baidu.com/item/%E5%AE%B9%E6%96%A5%E5%8E%9F%E7%90%86/10146840?fr=aladdin]
    [[1,2],[3,4]] 的意思就是坐标0,0放1个正方体，坐标0,1放2个正方体，坐标1,0放3个正方体，坐标1,1放4个正方体，求这些正方体按这些坐标摆放后形成的立体图形的表面积
    一个柱体一个柱体的看，每个柱体是由：2个底面（上表面/下表面）+ 所有的正方体都贡献了4个侧表面积。
    把柱体贴合在一起之后，我们需要把贴合的表面积给减掉，两个柱体贴合的表面积就是 两个柱体高的最小值*2。

    一个例子看懂题目： Input: [[2,2,2],[2,1,2],[2,2,2]] Output: 46 意思就是二维数组

    int[][] grid = {
                        {2, 2, 2}
                        {2, 1, 2}
                        {2, 2, 2}
                    }
    表明一个3*3网格，每个格子分别放置对应数字的方块

    表面积 = 总数 * 6 - 2(x + y + z)  x, y, z分别表示x, y, z方向重叠面数
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            res += grid[i][j] * 6;
            if (grid[i][j] > 1) {
                res -= (grid[i][j] -1) * 2;
            }
            // grid[i][j]会与grid[i - 1][j], grid[i][j - 1]有接触
            // 接触面个数为二者的最小,每一个接触面面积同样也是2,减去
            if (i >= 1) {
                res -= Math.min(grid[i][j], grid[i-1][j]) * 2
            }
            if (j >= 1) {
                res -= Math.min(grid[i][j], grid[i][j-1]) * 2
            }
        }
    }
    return res;
};