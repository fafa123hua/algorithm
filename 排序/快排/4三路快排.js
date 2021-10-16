// rthreeQuickSort
// 在二路的基础上添加一个等于层
// 在继续递归时，等于层不用管了，这样在含有大量相同元素的时候就可以避免大量的运算
// 这也是3路快排在含有大量相同元素的状况下，保持优势的地方.
var nums = [9, 10, 1, 1, 1, 1, 1, 1, 1, 2, 8, 4, 5]
var nums1 = [1, 1, 2, 2, 2, 2, 3]
var nums2 = [5, 5, 5, 4, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1]
var nums3 = [1, 1, 1, 2, 2, 2, 2, 2, 3]
var rthreeQuickSort = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let centre = Math.floor(Math.random() * Math.floor(nums.lenght - 1)) //取随机
  let pivot = nums.splice(centre, 1)[0]
  let left = [],
    right = [],
    equal = []
  equal.push(pivot)
  let i = 0,
    j = nums.length - 1
  // 加个判断
  if (i == j) {
    if (nums[0] < pivot) {
      left.push(nums[0])
    } else if (nums[0] == pivot) {
      equal.push(nums[0])
    } else {
      right.push(nums[0])
    }
    console.log(left, equal, right, '     1')

    return rthreeQuickSort(left).concat(equal, rthreeQuickSort(right))
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
    // 如上加个判断
    if (i == j) {
      if (nums[i] < pivot) {
        left.push(nums[i])
      } else if (nusm[i] == pivot) {
        equal.push(nums[i])
      } else {
        right.push(nums[i])
      }
      console.log(left, equal, right, '   2')
      return rthreeQuickSort(left).concat(equal, rthreeQuickSort(right))
    }

    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
    left.push(nums[i])
    right.push(nums[j])
    i++
    j--
  }
  console.log(left, equal, right, '    3')
  return rthreeQuickSort(left).concat(equal, rthreeQuickSort(right))
}
console.log(rthreeQuickSort(nums2))
