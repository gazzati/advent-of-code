const data = document.getElementsByTagName("pre")[0].textContent.slice(0, -1).split("\n")

const getWinnerScore = (rival, result) => {
  if (rival === "A") {
    if (result === "X") return 3
    if (result === "Y") return 1
    return 2
  }
  if (rival === "B") {
    if (result === "X") return 1
    if (result === "Y") return 2
    return 3
  }
  if (result === "X") return 2
  if (result === "Y") return 3
  return 1
}

const getCharScore = result => {
  if (result === "X") return 0
  if (result === "Y") return 3
  return 6
}

const result = data.reduce((acc, item) => {
  const [rival, result] = item.split(" ")
  const winnerScore = getWinnerScore(rival, result)
  const charScore = getCharScore(result)

  return acc + winnerScore + charScore
}, 0)

console.log(result)
