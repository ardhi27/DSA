var minimumNumberGame = function(s){
    s.sort((a, b) => a - b);

    for(let i = 0; i < s.length; i += 2){
        if(i + 1 < s.length){
            [s[i], s[i + 1]] = [s[i + 1], s[i]];
        }
    }
    return s
}


const arr = minimumNumberGame([7, 5, 2, 3, 2, 6])

console.log(arr)