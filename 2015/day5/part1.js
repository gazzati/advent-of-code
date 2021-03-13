const data = document.getElementsByTagName('pre')[0].textContent.split('\n').slice(0, -1)
const vowelReg = /\w*[aeiou]\w*[aeiou]\w*[aeiou]\w*/
const twoEqualReg = /(.)\1{1}/
const strPartReg = /(ab|cd|pq|xy)/

const result = data.filter(item => vowelReg.test(item) && twoEqualReg.test(item) && !strPartReg.test(item)).length

console.log(result.length)