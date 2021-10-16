// Radix Sort
// O(n)
var nums = [9, 10, 1, 1, 2, 8, 4, 5]
var radixSort = function (nums) {
  // 获取最大值
  let maxNum = Math.max.apply(Math, nums)
  let t = 1,
    bucketAry = new Array(10), // 0~9的数组,用来计算数字出现次数
    temp = new Array(nums.length) // 交换数组, 用来临时存储排序的数
  // 这一步是计算最大数有多少位,这个位数就是要循环的次数
  while ((maxNum /= 10) >= 1) {
    t++
  }
  let rate = 1,
    K = null
  for (let i = 1; i <= t; i++) {
    // 计数数组归零
    bucketAry.fill(0)
    // 清点数字次数
    nums.forEach((item) => {
      // 求数字最后一位的值
      k = Math.floor(item / rate) % 10
      bucketAry[k]++
    })
    // 通过数字次数得到该数字应该在数组中的位置
    bucketAry.reduce((total, item, index) => {
      bucketAry[index] = total + item
      return total + item
    })
    // 通过计算的顺序将ary中数存入temp数组中
    for (let j = nums.length - 1; j >= 0; j--) {
      k = Math.floor(nums[j] / rate) % 10
      temp[bucketAry[k] - 1] = nums[j]
      bucketAry[k]--
    }
    // 将temp相同位置的值负值给ary, 不能直接 ary = temp
    nums = nums.map((item, index) => temp[index])
    rate *= 10
  }
  temp = null
  bucketAry = null
  return nums
}
console.log(radixSort(nums))
