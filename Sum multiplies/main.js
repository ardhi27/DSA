

var sumMultiplies = function(n){
    let sumTotal = 0

    for(let i = 1; i <= n; i++){
       if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
        sumTotal += i
       }
    }

    return sumTotal
}


console.log(sumMultiplies(7))