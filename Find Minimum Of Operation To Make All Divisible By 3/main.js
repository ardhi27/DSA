var minimumOperations = function(nums) {
    let operation = 0
    let i = 0
    while(i <= nums.length){
        remaining = nums[i] % 3
        if(remaining >= 1){
            operation++
        }
        i++
    }
    return operation
};

const result = minimumOperations([1,2,3,4,5])
console.log(result)