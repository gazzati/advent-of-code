const formatNumber = document.getElementsByTagName('pre')[0].textContent.split('\n').map(Number)

const {arr} = formatNumber.reduce((acc, item) => {
    if(!item) return {
        arr: [...acc.arr, acc.currentSum],
        currentSum: 0
    }
    return {
        ...acc, currentSum: acc.currentSum + item
    }
}, {arr: [], currentSum: 0})

const sortedArr = arr.sort((a, b) => b - a)
const result = sortedArr.slice(0, 3).reduce((acc, item) => acc + item, 0)

console.log(result)