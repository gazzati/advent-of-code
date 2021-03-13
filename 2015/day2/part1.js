const data = document.getElementsByTagName('pre')[0].textContent.split('\n').slice(0, -1)
let sum = 0
data.forEach(item => {
    const values = item.split('x').map(Number)
    const [length, width, height] = values
    const minS = values.sort((a, b) => a - b).slice(0, -1).reduce((acc, item) => acc * item)
    sum += 2 * length * width + 2 * width * height + 2 * height * length + minS
})

console.log(sum)