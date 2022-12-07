const input = document.getElementsByTagName("pre")[0].textContent
let i = input.length
let floor = 0

while (i--) {
  if (input[i] === "(") {
    floor++
  } else {
    floor--
  }
}

console.log(floor)
