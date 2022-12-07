const formatNumber = document.getElementsByTagName("pre")[0].textContent.split("\n").map(Number)

const { arr } = formatNumber.reduce(
  (acc, item) => {
    if (!item)
      return {
        arr: [...acc.arr, acc.currentSum],
        currentSum: 0
      }
    return {
      ...acc,
      currentSum: acc.currentSum + item
    }
  },
  { arr: [], currentSum: 0 }
)

const result = Math.max(...arr)

console.log(result)
