// var minimumNumberGame = function(s){
//     s.sort((a, b) => a - b);

//     for(let i = 0; i < s.length; i += 2){
//         if(i + 1 < s.length){
//             [s[i], s[i + 1]] = [s[i + 1], s[i]];
//         }
//     }
//     return s
// }


// const arr = minimumNumberGame([7, 5, 2, 3, 2, 6])

// console.log(arr)


var minimumNumberGame = function (numbers) {
    numbers.sort((a, b) => a - b)
    const result = []
    while (numbers.length > 0) {
        if (numbers.length === 0) {
            break;
        } else {
            let aliceNumber = numbers.shift();
            let bobNumber = numbers.shift();
            result.push(bobNumber)
            result.push(aliceNumber)
        }

    }
    return result
}

console.log(minimumNumberGame([10, 5, 6, 4]))