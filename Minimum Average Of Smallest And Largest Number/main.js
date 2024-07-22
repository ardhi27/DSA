var minimumAverageNumber = function (nums) {
    nums.sort((a, b) => a - b)
    const arr = []

    while (nums.length > 1) {
        let firstNumber = nums.shift();
        let lastNumber = nums.pop();

        let averageNumber = (firstNumber + lastNumber) / 2

        arr.push(averageNumber);

        if(nums.length === 0){
            break;
        }

    }
    return Math.min(...arr)
}

console.log(minimumAverageNumber([7, 8, 3, 4, 15, 13, 4, 1]))