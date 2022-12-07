const data = document.getElementsByTagName("pre")[0].textContent.split("")
let houses = ["0,0"]
let santaCurrentHouse = houses[0]
let robotCurrentHouse = houses[0]

data.forEach((item, index) => {
  let isRobot = index % 2 === 0
  let [x, y] = isRobot ? robotCurrentHouse.split(",") : santaCurrentHouse.split(",")

  switch (item) {
    case ">":
      x++
      break
    case "<":
      x--
      break
    case "^":
      y++
      break
    case "v":
      y--
      break
  }

  const newHouse = `${x},${y}`

  if (isRobot) {
    robotCurrentHouse = newHouse
  } else {
    santaCurrentHouse = newHouse
  }

  if (!houses.includes(newHouse)) {
    houses.push(newHouse)
  }
})

console.log(houses.length)
