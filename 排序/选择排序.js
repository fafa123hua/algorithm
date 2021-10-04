//selection sort
//O(n^2)
//空间o（1）
var nums = [9, 10, 1, 2, 8, 4, 5]
var selectionSort = function (nums) {
  let len = nums.length
  let min = 0
  let temp
  nums.forEach((element, i) => {
    min = i
    for (j = i + 1; j < len; j++) {
      if (nums[j] < nums[min]) {
        min = j
      }
    }
    temp = nums[i]
    nums[i] = nums[min]
    nums[min] = temp
  })
  return nums
}
console.log(selectionSort(nums))
