const sentence = "Word"

const arraySentence = Array.from(sentence)

let map = new Map();


console.log(arraySentence)

for(let i = 0; i < arraySentence.length; i++){
    map[i] = arraySentence[i]
}

console.log(map)