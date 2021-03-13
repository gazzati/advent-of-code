const data = document.getElementsByTagName('pre')[0].textContent.split('')
let houses = ['0,0']
let currentHouse = houses[0]

data.forEach(item => {
    let [x, y] = currentHouse.split(',')
    switch (item) {
        case '>':
            x++
            break
        case '<':
            x--
            break
        case '^':
            y++
            break
        case 'v':
            y--
            break
    }

    const newHouse = `${x},${y}`
    currentHouse = newHouse
    if (!houses.includes(newHouse)) {
        houses.push(newHouse)
    }
})

console.log(houses.length)