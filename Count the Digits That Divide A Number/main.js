var countDigits = function (num) {
    const arr = num.toString().split('')
    let digit = 0
    for (let i = 0; i < arr.length; i++) {
        if (num % arr[i] == 0) {
            digit++
        }
    }
    return digit
}


