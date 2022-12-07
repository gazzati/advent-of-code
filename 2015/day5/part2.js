const data = document.getElementsByTagName("pre")[0].textContent.split("\n").slice(0, -1)
const equalPair = /(..).*?\1/
const pairWithLetterBetween = /(.).\1/

const result = data.filter(item => equalPair.test(item) && pairWithLetterBetween.test(item))

console.log(result.length)
