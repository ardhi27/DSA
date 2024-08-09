

let sortedFrequency = function (nums) {
    const sortedFrequencyNumber = {}

    for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
            sortedFrequencyNumber[nums[i]] = count
        }

    }
    const sortedFrequencyArray = Object.entries(sortedFrequencyNumber).map(([num, count]) => [parseInt(num), count]);
    sortedFrequencyArray.sort((a, b) => a[1] - b[1])

    const finalResult = [];
    sortedFrequencyArray.forEach(([num, count]) => {
        for(let i = 0; i < count; i++){
            finalResult.push(num)
        }
    })

    return finalResult
}

console.log(sortedFrequency([1, 1, 1, 2, 2]))