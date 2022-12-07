const data = document.getElementsByTagName("pre")[0].textContent.slice(0, -1).split("\n")

const getWinnerScore = (rival, player) => {
  if (rival === "A") {
    if (player === "X") return 3
    if (player === "Y") return 6
    return 0
  }
  if (rival === "B") {
    if (player === "X") return 0
    if (player === "Y") return 3
    return 6
  }
  if (player === "X") return 6
  if (player === "Y") return 0
  return 3
}

const getCharScore = player => {
  if (player === "X") return 1
  if (player === "Y") return 2
  return 3
}

const result = data.reduce((acc, item) => {
  const [rival, player] = item.split(" ")
  const winnerScore = getWinnerScore(rival, player)
  const charScore = getCharScore(player)

  return acc + winnerScore + charScore
}, 0)

console.log(result)
