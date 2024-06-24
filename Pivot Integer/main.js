

var findPivot = function(n){
    let x = Math.sqrt(n * (n + 1) / 2);
    if(x % 1 != 0){
        return -1;
    }
    return x;
}


console.log(findPivot(8))