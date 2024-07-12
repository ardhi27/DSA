// const countSmallerNumber = function(s){
    
//     let arrCount = []

//     for(let i = 0; i < s.length; i++){
//         let count = 0;
//         for(let j = 0; j < s.length; j++){
//             if(s[i] > s[j]){
//                 count++
//             }
//         }
//         arrCount.push(count)
//     }
//     return arrCount
// }

// console.log(countSmallerNumber([7,7,7,7]))

const arr = [[1,2,3,4,5], [2,5,6,7,8]]

for(let i = 0; i < arr.length; i++){
   for(let j = 0; j < i.length; j++){
    console.log(i[j])
   }
}