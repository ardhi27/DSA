var numToOddBinary = function(n){
    let binaryArray = n.split('');
    

    binaryArray[binaryArray.length - 1] = '1'

    return binaryArray.join('')
}


console.log(numToOddBinary('010'))