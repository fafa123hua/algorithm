// rquick sort
// 平均意义上，对于任何数组（包括渐进有序数组），快排遇到最差情况的概率将大大降低
var nums = [9, 10, 1, 1, 2, 8, 4, 5]
var rquickSort = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let centre = Math.floor(Math.random() * Math.floor(nums.length - 1)) // 取随机坐标
  let pivot = nums.splice(centre, 1)[0] // 取对应数值
  let left = [],
    right = []
  nums.forEach((element, i) => {
    // '<'和'>'决定升序降序
    if (element < pivot) {
      left.push(element)
    } else {
      right.push(element)
    }
  })
  console.log(left, pivot, right, nums, nums.length)

  return rquickSort(left).concat(pivot, rquickSort(right)) // 递归
}
console.log(rquickSort(nums))
