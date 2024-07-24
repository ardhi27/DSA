let heightChecker = function(heights){
    const sortedHeights = [...heights].sort((a, b) => a - b)

    let heightCount = 0

    for(let i = 0; i < heights.length; i++){
        if(heights[i] != sortedHeights[i]){
            heightCount++;
        }
    }
    return heightCount
}

console.log(heightChecker([1, 3, 2, 7, 4]))