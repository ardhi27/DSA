/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (b > 0) {
        for (let i = 0; i < b; i++) {
            a++;  // Increment `a` by 1 in each iteration
            console.log(`Iteration ${i + 1}: a = ${a}`);
        }
    } else {
        for (let i = 0; i > b; i--) {
            a--;  // Decrement `a` by 1 in each iteration
            console.log(`Iteration ${Math.abs(i) + 1}: a = ${a}`);
        }
    }
    return a;
};

console.log(getSum(-5, -10));  // Output: 7
