let maximumOfProduct = function(nums){
    const descSortedNumbers = [...nums].sort((a, b) => b - a)
    const ascSortedNumbers = [...nums].sort((a, b) => a - b)

    const multiplySortedNumbers = (descSortedNumbers[0] * descSortedNumbers[1]) - (ascSortedNumbers[0] * ascSortedNumbers[1])
    return multiplySortedNumbers
}

console.log(maximumOfProduct([5,6,2,7,4]))


// const arr = [5,6,2,7,4]

// const sortNum1 = [...arr].sort((a, b) => b - a)
// const sortNum2 = [...arr].sort((a, b) => a - b)

// console.log(sortNum1)
// console.log(sortNum2)