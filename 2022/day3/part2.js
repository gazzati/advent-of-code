const data = document.getElementsByTagName("pre")[0].textContent.slice(0, -1).split("\n")

const getCharPriority = char => {
  const priority = char.charCodeAt() - 96
  if (priority < 0) return priority + 58
  return priority
}

const checkCharIncludes = () => {}

const result = data.reduce((acc, item, index, arr) => {
  if (index % 3 !== 0) return acc

  let char = ""

  item.split("").every(c => {
    if (!arr[index + 1].includes(c) || !arr[index + 2].includes(c)) return true

    char = c
    return false
  })

  return acc + getCharPriority(char)
}, 0)

console.log(result)
