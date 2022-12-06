const data = document.getElementsByTagName('pre')[0].textContent.slice(0, -1).split('\n')

const generateArray = (str) => {
    const [start, stop] = str.split("-")
    return Array.from({ length: (stop - start) + 1}, (_, i) => Number(start) + i)
}

const result =  data.reduce((acc, item) => {
    const [first,second] = item.split(",")

    const firstArr = generateArray(first)
    const secondArr = generateArray(second)

    if(firstArr.some(digit=> secondArr.includes(digit)) || secondArr.some(digit=> firstArr.includes(digit))) return acc + 1

    return acc
}, 0)

console.log(result)