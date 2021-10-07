// bucket sort
// O(n)
var nums = [9, 10, 1, 2, 8, 4, 5]
var bucketSort = function (nums) {
  let sta = new Array(11)
  sta.fill(0)
  let len = nums.length
  let max = nums[0]
  let end = []
  for (let i = 0; i < len; i++) {
    sta[nums[i]]++
    if (max < nums[i]) {
      max = nums[i]
    }
  }
  for (let i = 0; i <= max; i++) {
    if (sta[i] > 0) {
      end.push(i)
    }
  }
  return end
}
console.log(bucketSort(nums))
