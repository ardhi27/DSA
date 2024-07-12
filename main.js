const arr = [[1, 2, 3, 4, 5], [2, 5, 6, 7, 8]]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] % 2 == 0) {
            console.log(arr[i])
            break;
        }
    }
}