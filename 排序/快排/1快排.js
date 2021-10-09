// quick sort
// 快排在最糟糕得情况下时间复杂度是O(n²)，平均的复杂度是O(nlogn)
var nums = [9, 10, 1, 1, 2, 8, 4, 5]
var quickSort = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let centre = Math.floor(nums.length / 2) // 取中间坐标
  let pivot = nums.splice(centre, 1)[0] // 取对应数值
  let left = [],
    right = []
  nums.forEach((element) => {
    // '<'和'>'决定升序降序
    if (element < pivot) {
      left.push(element)
    } else {
      right.push(element)
    }
  })
  console.log(left, pivot, right)

  return quickSort(left).concat(pivot, quickSort(right)) // 递归
}
console.log(quickSort(nums))
