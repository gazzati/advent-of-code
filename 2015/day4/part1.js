const MD5 = require("crypto-js/md5")
const data = "bgvyzdsv"

for (let i = 1; ; i++) {
  if (
    MD5(data + i)
      .toString()
      .startsWith("000000")
  ) {
    console.log(i)
    break
  }
}
