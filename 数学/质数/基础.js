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
