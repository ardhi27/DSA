const number1 = 234;
const numberToString = number1.toString().split('').map(Number)

const subtract = subtractProduct(234)
const add = addProduct(234)

console.log(subtract - add)


function subtractProduct(n){
    const toNumber = n.toString().split('').map(Number)
    let multiplyNumber = 1
    for(const num of toNumber){
        multiplyNumber *= num;
    }
    return multiplyNumber
}

function addProduct(n){
    const toNumber = n.toString().split('').map(Number)
    let sum = 0
    for(const num of toNumber){
         sum += num
    }

    return sum
}