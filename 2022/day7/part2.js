const data = document.getElementsByTagName("pre")[0].textContent.slice(0, -1).split("\n")

let sizeMemo = {}

const getDirSize = (fs, path) => {
  const files = fs.dirs[path]
  if (!files) return 0

  return files.reduce((acc, file) => {
    if (file.type === "file") return acc + file.size

    const dirName = file.pwd + "/" + file.name
    if (typeof sizeMemo[dirName] === "number") return acc + sizeMemo[dirName]

    const dirSize = getDirSize(fs, dirName)
    sizeMemo[dirName] = dirSize

    return acc + dirSize
  }, 0)
}

const ls = (fs, path, indent = 1) => {
  const files = fs.dirs[path]
  if (!files) return ""

  files.forEach(file => ls(fs, path + "/" + file.name, indent + 1))
}

const cd = (fs, dest) => {
  if (dest === "/") {
    fs.pwd = "/"
    return (fs.parentPwd = [])
  }
  if (dest === "..") {
    const [parent, ...other] = fs.parentPwd
    fs.parentPwd = other
    return (fs.pwd = parent)
  }
  let parentPwd = fs.pwd
  fs.pwd = fs.pwd + "/" + dest
  fs.parentPwd = [parentPwd, ...fs.parentPwd]
}

const makeFs = output => {
  return output.reduce(
    (fs, line) => {
      if (line.startsWith("$ cd ")) {
        const dest = line.substr("$ cd ".length)
        cd(fs, dest)
      } else if (line.startsWith("$ ls")) {
        if (!fs.dirs[fs.pwd]) fs.dirs[fs.pwd] = []
      } else {
        const [dirOrSize, name] = line.split(" ")
        fs.dirs[fs.pwd].push({
          type: dirOrSize === "dir" ? dirOrSize : "file",
          size: dirOrSize === "dir" ? undefined : Number(dirOrSize),
          name,
          pwd: fs.pwd
        })
      }

      return fs
    },
    { pwd: null, parentPwd: [], dirs: {} }
  )
}

const fs = makeFs(data)

const usedSpace = getDirSize(fs, "/")
const softwareSpace = 30000000
const sizeToFree = softwareSpace - (70000000 - usedSpace)

const result = Object.keys(fs.dirs)
  .sort((a, b) => getDirSize(fs, a) - getDirSize(fs, b))
  .reduce((acc, dir) => {
    if (acc !== -1) return acc

    const size = getDirSize(fs, dir)
    if (size >= sizeToFree) return size

    return acc
  }, -1)

console.log(result)
