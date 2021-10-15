// rtwoQuickSort
// 等于基准的数在两边均有分布，避免集中在一边，从而克服了不平衡问题。
var nums = [9, 10, 1, 1, 1, 1, 1, 1, 1, 2, 8, 4, 5]
var nums1 = [1, 1, 2, 2, 2, 2, 3]
var nums2 = [5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1]
var nums3 = [1, 1, 1, 2, 2, 2, 2, 2, 3]

var rtwoQuickSort = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let centre = Math.floor(Math.random() * Math.floor(nums.length - 1)) // 取随机坐标
  let pivot = nums.splice(centre, 1)[0] // 取对应数值
  let left = [],
    right = []
  let i = 0,
    j = nums.length - 1
  if (i == j) {
    if (nums[0] < pivot) {
      left.push(nums[0])
    } else {
      right.push(nums[0])
    }
    console.log(left, pivot, right, '     1')

    return rtwoQuickSort(left).concat(pivot, rtwoQuickSort(right))
  }
  while (true) {
    while (nums[i] < pivot && i <= nums.length - 1) {
      left.push(nums[i])
      i++
    }
    while (nums[j] > pivot && j >= 0) {
      right.push(nums[j])
      j--
    }
    if (i > j) {
      break
    }
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
    if (i == j) {
      if (nums[i] < pivot) {
        left.push(nums[i])
      } else {
        right.push(nums[j])
      }
      console.log(left, pivot, right, '   2')

      return rtwoQuickSort(left).concat(pivot, rtwoQuickSort(right))
    }
    left.push(nums[i])
    right.push(nums[j])
    i++
    j--
  }
  console.log(left, pivot, right, '    3')

  return rtwoQuickSort(left).concat(pivot, rtwoQuickSort(right))
}
console.log(rtwoQuickSort(nums3))

// set NODE_OPTIONS=--max_old_space_size=8172
