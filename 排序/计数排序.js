// Counting Sort
// O(n)
var nums = [9, 10, 1, 1, 2, 8, 4, 5]
var bucketSort = function (nums) {
  let sta = new Array(11) //这里可以将长度定为max-min+1，在一定程度上降低空间消耗
  sta.fill(0)
  let len = nums.length
  let max = nums[0]
  let min = nums[0]
  let end = []
  nums.forEach((element) => {
    sta[element]++
    if (max < element) {
      max = element
    }
    if (min > element) {
      min = element
    }
  })
  for (let i = min; i <= max; i++) {
    if (sta[i] > 0) {
      while (sta[i]) {
        sta[i]-- //此处去掉直接push可以达到去重效果
        end.push(i)
      }
    }
  }
  return end
}
console.log(bucketSort(nums))
