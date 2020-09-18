/**
152. 乘积最大子数组
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

 

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
通过次数54,025提交次数140,124
 */
/**
重新定义 dp 数组
二维数组 dp

dp[i][0]

以 nums[i] 为末尾项的子数组的最小乘积
或者说，从第 0 项到第 i 项这个范围内的子数组的最小乘积
dp[i][1]

以 nums[i]为末尾项的子数组的最大积
或者说，从第 0 项到第 i 项这个范围内的子数组的最大乘积
base case：

dp[0][0] = nums[0]
dp[0][1] = nums[0]
对于以 i 项为末尾项的子数组能产生的最小积，它有 3 种情况：

不和别人乘，就它自己
自己是负数，希望和前面的最大积乘，期待负的更多
自己是正数，希望和前面的最小积乘，期待变负
dp[i][0] 取这三种情况中最小的那个

dp[i][0] = min( dp[i - 1][0] * nums[i],dp[i - 1][1] * nums[i], nums[i])
dp[i][0]=min(dp[i−1][0]∗nums[i],dp[i−1][1]∗nums[i],nums[i])

类似的，dp[i][1] 取三种情况中最大的那个

dp[i][1] = max( dp[i - 1][0] * nums[i], dp[i - 1][1] * nums[i], nums[i])
dp[i][1]=max(dp[i−1][0]∗nums[i],dp[i−1][1]∗nums[i],nums[i])

时间复杂度 O(n) 空间复杂度O(n)

进行优化 压缩空间
观察状态转移方程，可以看出 dp[i][x] 只和 dp[i - 1][x] 有关，和再之前的结果无关
这背后的原因其实是：子数组是连续的
我们可以用两个变量 prevMin 和 prevMax 去存储每个位置的最小积和最大积，每求一个位置的值就更新一下这俩变量
base case
prevMin = nums[0];
prevMax = nums[0];
状态转移方程
prevMin = min( prevMin * nums[i], prevMax * nums[i], nums[i])
prevMin=min(prevMin∗nums[i],prevMax∗nums[i],nums[i])

prevMax = max( prevMin * nums[i], prevMax * nums[i], nums[i])
prevMax=max(prevMin∗nums[i],prevMax∗nums[i],nums[i])

一不小心报错了，为什么
等号右边的 prevMin 和 prevMax 属于 dp[i - 1] 的
等号左边的 prevMin 和 prevMax 属于 dp[i] 的
但第一个等式等号左边的 prevMin 用到了第二个等式的等号右边
我们可以用变量暂存 prevMin * nums[i] 和 prevMax * nums[i]
一次循环还可以少做两次乘法

作者：hyj8
链接：https://leetcode-cn.com/problems/maximum-product-subarray/solution/wa-ni-zhe-ti-jie-shi-xie-gei-bu-hui-dai-ma-de-nu-p/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = (nums) => {
    let res = nums[0]
    let prevMin = nums[0]
    let prevMax = nums[0]
    let temp1 = 0, temp2 = 0
    for (let i = 1; i < nums.length; i++) {
      temp1 = prevMin * nums[i]
      temp2 = prevMax * nums[i]
      prevMin = Math.min(temp1, temp2, nums[i])
      prevMax = Math.max(temp1, temp2, nums[i])
      res = Math.max(prevMax, res)
    }
    return res
  }