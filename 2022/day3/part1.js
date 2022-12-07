const data = document.getElementsByTagName("pre")[0].textContent.slice(0, -1).split("\n")

const getCharPriority = char => {
  const priority = char.charCodeAt() - 96
  if (priority < 0) return priority + 58
  return priority
}

const result = data.reduce((acc, item) => {
  const half = item.length / 2

  const first = item.split("").slice(0, half)
  const second = item.split("").slice(half)

  let char = ""

  first.every(c => {
    if (!second.includes(c)) return true
    char = c
    return false
  })

  return acc + getCharPriority(char)
}, 0)

console.log(result)
