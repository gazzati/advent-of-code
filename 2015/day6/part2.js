const data = document.getElementsByTagName('pre')[0].textContent.split('\n').slice(0, -1)
var grid = new Uint8ClampedArray(1_000_000)

data.forEach(row => {
    const [str, action, x1, y1, x2, y2] = row.match(/^(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)$/)
    for (let x = +x1; x <= x2; x++) {
        for (let y = +y1; y <= y2; y++) {
            const index = 1000 * x + y
            grid[index] += action === 'toggle' ? 2 : action === 'turn on' ? 1 : -1
        }
    }
})

console.log(grid.reduce((sum, light) => light + sum))