let n = 1000
const isPrime = (x) => {
  for (let i = 5; i * i <= x; i += 6) {
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
