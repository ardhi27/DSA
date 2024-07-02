

const palindromeString = function(s){
    
    for(let i = 0; i < s.length; i++){

        if(s[i] === s[i].split('').reverse().join('')){
            return s[i]
        }
    }
}


console.log(palindromeString(['racecar', 'abcdefg']))