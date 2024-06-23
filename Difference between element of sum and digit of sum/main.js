const element = [ 1, 2, 3, 4]

const splitElement = element.join('').split('').map(Number)

const sumElement = element.reduce((a, b) => a + b)
const sumSplittedElement = splitElement.reduce((a, b) => a + b)

console.log(sumElement - sumSplittedElement)

// Method 1
// let sumElement = 0
// let sumSplittedElement = 0

// for(let i = 0; i < element.length; i++){
//     sumElement += element[i]
// }

// for(let i = 0; i < splitElement.length; i++){
//     sumSplittedElement += splitElement[i]
// }

// const finalResult = sumElement - sumSplittedElement

// console.log(finalResult)