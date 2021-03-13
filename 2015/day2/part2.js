const data = document.getElementsByTagName('pre')[0].textContent.split('\n').slice(0, -1)
let sum = 0

data.forEach(item => {
    const values = item.split('x').map(Number)
    const [length, width, height] = values
    const [min, mid] = values.sort((a, b) => a - b).slice(0, -1)
    sum += 2 * min + 2 * mid + length * width * height
})

console.log(sum)