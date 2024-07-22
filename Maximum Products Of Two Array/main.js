let sumOfMaxProduct = function(nums){
    const sortedNums = nums.sort((a,b) => b - a)

    let sumOfProduct = sortedNums.slice(0, 2)

    return sumOfProduct[0] + sumOfProduct[1]
}


console.log(sumOfMaxProduct([2,5,4,3]))