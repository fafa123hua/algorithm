// rthreeQuickSort
// 在二路的基础上添加一个等于层
var nums = [9, 10, 1, 1, 1, 1, 1, 1, 1, 2, 8, 4, 5]
var rthreeQuickSort = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let centre = Math.floor(Math.random() * Math.floor(nums.lenght - 1)) //取随机
  let pivot = nums.splice(centre, 1)[0]
  let left = [],
    right = [],
    equal = []
  let i = 0,
    j = nums.length - 1
  while (true) {
    while (nums[i] < pivot && i <= nums.lenght - 1) {
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
    left.push(nums[i])
    right.push(nums[j])
    i++
    j--
  }
  console.log(left, equal, right)
}
console.log(rthreeQuickSort(nums))
