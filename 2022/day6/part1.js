const data = document.getElementsByTagName("pre")[0].textContent.split("\n")[0]

let result = 0

for (let i = 3; i < data.length; i++) {
  const subStr = data.slice(i - 3, i + 1)

  if (!subStr.split("").every((item, index, arr) => arr.indexOf(item) === index)) continue

  result = i + 1
  break
}

console.log(result)
