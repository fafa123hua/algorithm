// bucket sort
// O(n)
var nums = [9, 10, 1, 2, 8, 4, 5]
var bucketSort = function (nums) {
  let sta = new Array(100)
  sta.fill(0)
  let len = nums.length
  let max = nums[0]
  for (let i = 0; i < len; i++) {
    sta[nums[i]]++
    if (max < nums[i]) {
      max = nums[i]
    }
  }
  for (let i = 0; i <= max; i++) {
    if (sta[i] > 0) {
      console.log(i)
    }
  }
}
bucketSort(nums)
