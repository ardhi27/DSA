const arr = [ 1, 4, 2, 5, 3]

const arrSplit = []
let totalSum = 0


for(let i = 0; i < arr.length; i++){
    //Mencari panjang subarray ganjil
    for(let length = 1; length <= arr.length - i; length += 2){
        //Memisahkan setiap elemen berdasarkan panjang ganjil
        let subArray = arr.slice(i, i + length);
        //Menghitung total
         totalSum += subArray.reduce((a, b) => a + b, 0)
    }
}

console.log(totalSum)