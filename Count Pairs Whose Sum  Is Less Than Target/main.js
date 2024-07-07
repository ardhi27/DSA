var countPairs = function(target, array){

    let count = 0
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] + array[j] < target){
                count++
            }
        }
    }
    return count
}

console.log(countPairs(-2, [-6,2,5,-2,-7,-1,3]))