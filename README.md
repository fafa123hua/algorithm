# 排序

## 选择排序

### 原理

通过确定一个最大或最小值，再从带排序的的数中找出最大或最小的交换到对应位置。

### 复杂度

时间复杂度 O(n²)

空间复杂度 O(1)

### 代码实现

```js
var selectionSort = function (nums) {
  let len = nums.length
  let min = 0
  let temp
  nums.forEach((element, i) => {
    min = i
    for (j = i + 1; j < len; j++) {
      if (nums[j] < nums[min]) {
        min = j                   //找到最小值下标
      }
    }
    temp = nums[i]                //交换
    nums[i] = nums[min]
    nums[min] = temp
  })
  return nums
}
```

## 快排

### 普通快排

#### 原理

1. 从数组中选择一个元素作为基准点
2. 排序数组，所有比基准值小的元素摆放在左边，而大于基准值的摆放在右边。每次分割结束以后基准值会插入到中间去。
3. 最后利用递归，将左右两边的数组再进行一次上述的 1 和 2 操作。

#### 复杂度

快排在最糟糕得情况下时间复杂度是 O(n²)，平均的复杂度是 O(nlogn)

#### 代码实现

```js
var quickSort = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let centre = Math.floor(nums.length / 2) // 取中间坐标
  let pivot = nums.splice(centre, 1)[0] // 取对应数值
  let left = [],
    right = []
  nums.forEach((element) => {
    if (element < pivot) {              // '<'和'>'决定升序降序
      left.push(element)
    } else {
      right.push(element)
    }
  })
  return quickSort(left).concat(pivot, quickSort(right)) // 递归
}
```

### 随机快排

随机选取基准值，在平均意义上，对于任何数组（包括渐进有序数组），快排遇到最差情况的概率将大大降低

#### 代码实现

```js
// rquick sort
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

```

### 双路快排

#### 原理

从两端向中间挺近，设立两个区：_小于等于区，大于等于区_，等于基准的数在两边均有分布，避免集中在一边，从而克服了不平衡问题。

#### 代码实现

如图出现内存问题

![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e62eb2c0fd6f4fd397bc0af62bc189fa~tplv-k3u1fbpfcp-zoom-1.image)

可以输入下面代码设置解决：

`set NODE_OPTIONS=--max_old_space_size=8172`

```js
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
  // 处理在开始的时候i，j指向同一个
  if (i == j) {
    if (nums[0] < pivot) {
      left.push(nums[0])
    } else {
      right.push(nums[0])
    }
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
    //i，j指向同一个
    if (i == j) {
      if (nums[i] < pivot) {
        left.push(nums[i])
      } else {
        right.push(nums[j])
      }
      return rtwoQuickSort(left).concat(pivot, rtwoQuickSort(right))
    }
    left.push(nums[i])
    right.push(nums[j])
    i++
    j--
  }
  return rtwoQuickSort(left).concat(pivot, rtwoQuickSort(right))
}
console.log(rtwoQuickSort(nums3))
```

### 三路快排

#### 原理

从两端向中间挺近，设立三个区：_小与区，等于区，大于区_，在双路的基础上新增了等于区，在继续递归时，等于区不用判断，这样在含有大量相同元素的时候就可以避免大量的运算。这也是三路快排在含有大量相同元素的状况下，保持优势的地方.

#### 代码实现

```js

```

## 非比较排序

这几种排序算法的时间复杂度虽然低，但是对要排序的数据要求比较苛刻，需要按照具体情况使用

### 桶排序

#### 原理

#### 复杂度

#### 代码实现

```js

```

### 计数排序

#### 原理

计数排序可以看成是桶排序的一种特殊情况，只是桶的大小粒度不一样。当要排序的 n 个数据，所处的范围并不大的时候，比如最大值是 k，我们就可以把数据划分成 k 个桶。每个桶内的数据值都是相同的，省掉了桶内排序的时间。

#### 复杂度

时间复杂度 O(n)

#### 代码实现

```js
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
```

### 基数排序

#### 原理

#### 复杂度

#### 代码实现

# 数学

## 质数

### 基础枚举

```js
let n = 1000
const isPrime = (x) => {
  for (let i = 2; i * i <= x; ++i) {
    if (x % i == 0) {
      return false
    }
  }
  return true
}

var countPrimes = function (n) {
  let ans = 0
  if (n > 2) ans++
  for (let i = 3; i < n; i += 2) {
    ans += isPrime(i)
  }
  return ans
}
console.log(countPrimes(n))

```

### 孪生素数

举例来説 :

轴心偶数12对应的孪生素数对: (11,13) ,

轴心偶数18 对应的孪生素数对: (17,19)

轴心偶数42 对应的孪生素数对: (41,43)

```js
let n = 1000
const isPrime = (x) => {
  for (let i = 5; i * i <= x; i += 6) {//对6x两侧的数进行判断
    if (x % i == 0 || x % (i + 2) == 0) {
      return false
    }
  }
  return true
}

var countPrimes = function (n) {
  let ans = 0
  if (n > 2) ans++
  if (n > 3) ans++
  for (let i = 3; i < n; i += 2) {
    if (i % 6 != 1 && i % 6 != 5) {
      continue //不是6两侧的数不是素数
    }
    ans += isPrime(i)
  }
  return ans
}
console.log(countPrimes(n))
```

### 埃氏筛

如果 x 是质数,那么大于的x的倍数 2x,3x ....一定不是质数,

```js

```



### 线性筛

在埃氏筛的基础上，不在重复的去标记数，例如45这个数，它会同时被3，5两个数标记为合数

```js

```

