
const harshadNumber = function(s) {
    const digit = s.toString().split('').map(Number).reduce((a, b) => a + b)
    if( s % digit == 0){
        return digit 
    }
    return -1
}


console.log(harshadNumber(22))