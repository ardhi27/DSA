

// const number = [3, 3, 3, 3, 3]

// const checkDuplicateNumber = function (number) {
//     const seen = new Set();
//     const duplicateNumber = new Set();

//     for(let i = 0; i < number.length; i++){

//         if(seen.has(number[i])){
//             duplicateNumber.add(number[i])
//         }else{
//             seen.add(number[i])
//         }
//     }
//     return duplicateNumber
// }

// console.log(checkDuplicateNumber(number))

const number = [1,3,4,2,2]
const numArr = []

var testFunction = function (number) {
    const seen = {}
    const numArr = []

    for(let i = 0; i < number.length; i++){
        if(!seen[number[i]]){ //Jika key di dalam seen belum ada
            seen[number[i]] = 1 // misal 3 : 1
        }else{ // Jika key di dalam seen sudah ada
            seen[number[i]]++; // menambahkan nilai kunci setiap kali ditemukan kembali.
            if(seen[number[i]] === 2){ // Jika nilai key sama dengan 2, artinya terdapat nilai duplikat
                numArr.push(number[i]) // Maka push key yang nilainya sama 2 ke dalam Array 
            }
        }
    }
    return numArr
}

console.log(testFunction(number))

