// 1.1横向模糊匹配
//  横向模糊指的是，一个正则可匹配的字符串的长度不是固定的，可以是多种情况的
var regex1 = /ab{2,5}c/g
//  g它是正则的一个修饰符,表示全局匹配.
var string1 = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
console.log(string1.match(regex1))

// 1.2纵向模糊匹配
//  纵向模糊指的是，一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种可能
var regex2 = /a[123]b/g
var string2 = 'a0b a1b a2b a3b a4b'
console.log(string2.match(regex2))
