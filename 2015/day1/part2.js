const str = document.getElementsByTagName("pre")[0].textContent
let floor = 0

for (let i = 0; i <= str.length; i++) {
  floor === -1 && console.log(str[i], i, floor)

  if (str[i] === "(") {
    floor++
  } else {
    floor--
  }
}
