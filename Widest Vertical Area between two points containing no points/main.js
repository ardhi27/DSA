let points = [[8,7], [9,9], [7,4]]

//Mengambil elemen dari index 0 pada setiap sub array
let xCoords = points.map(point => point[0])

xCoords.sort((a, b) => a - b);

let maxWidth = 0

for (let i = 1; i < xCoords.length; i++){
    maxWidth = Math.max(maxWidth, xCoords[i] - xCoords[i - 1]);
}

console.log(maxWidth)