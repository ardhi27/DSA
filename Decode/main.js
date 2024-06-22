
let key = "the quick brown fox jumps over the lazy dog"
key = Array.from(new Set(key.split(' ').join('')))
const hash = new Map()
const alpha = 'abcdefghijklmnopqrstuvwxyz'
const message = "vkbs bs t suepuv"
let result = ''
for(let i = 0; i < alpha.length; i++){
    hash.set(alpha[i], key[i])
}


for(let chr of message ){
    result += hash.get(chr)
}

console.log(result)