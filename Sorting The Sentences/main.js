// let sortedSentences = function(sentence){

// }



const sentence = "is2 sentence4 my3 this1"

const splittedSentence = sentence.split(' ')

const sortedSentences = []

for(let i = 0; i < splittedSentence.length; i++){
    const word = splittedSentence[i] //Ambil setiap kalimat
    const wordIndex = parseInt(word.match(/\d+/)) //Mengambil digit yang akan dijadikan index
    sortedSentences[wordIndex - 1] = word.replace(/\+d/, ''); // Menaruh kalimat berdasarkan index dari wordIndex
}

sortedSentences.join(' ')
console.log(sortedSentences)