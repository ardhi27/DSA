
const seats = [3, 1, 5]
const students = [2, 7, 4]
seats.sort((a, b) => a - b)
students.sort((a, b) => a - b)

let totalMoves = 0
seats.forEach((s, i) => {
    totalMoves += Math.abs(s - students[i])
});


console.log(totalMoves)


