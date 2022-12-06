const data = document.getElementsByTagName('pre')[0].textContent.slice(0, -1).split('\n')
const sliceIndex = data.indexOf("")
const stacks = data.slice(0, sliceIndex)
const actions = data.slice(sliceIndex + 1)

const getKey = (index) => {
    if(index === 1) return 1
    return (index - 1) / 4 + 1
}

const collection = stacks.pop().split(" ").reduce((acc, item) => {
    if(!item) return acc
    return {...acc, [item]: []}
}, {})

stacks.reverse().map((stack, index) => {
    stack.split("").map((digit, diginIndex) => {
        if([" ", "[", "]"].includes(digit)) return

        const key = getKey(diginIndex)
        collection[key].push(digit)
    })

})

actions.map(action => {
    const [_, count, from, to] = action.match(/move (\d+) from (\d+) to (\d+)$/)

    for(let i = 0; i < count; i++) {
        const item = collection[from].pop()
        collection[to].push(item)
    }
})

const result = Object.keys(collection).reduce((acc, key) => {
    const lastDigit = collection[key].pop()
    if(!lastDigit) return acc

    return acc + lastDigit
}, "")

console.log(result)