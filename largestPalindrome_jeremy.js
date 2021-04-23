// TODO: Given a positive integer value "N", return the largest numeric palindrome (if one exists) 
//  that can be produced by multiplying two N-digit numbers, else return 0 (if one doesn't exist)
// EXAMPLE: N=2, output should be 9009 (91*99)
// NOTE: Assume all inputs are valid (0 < N < 8)

// Directions:
//  1. Rename this file, substituting "yourname" with your name
//  2. Replace "yourname" with your name in the variable below
exports.name = "jeremy";
//  3. Add optimizations to the solution below
//  4. Upload your optimized solution 


isPalindrome = (num) => {
    // determine if input value matches it's reversed value (i.e. check if it's a palindrome!)
    strNum = num.toString();
    return strNum === strNum.split("").reverse().join("");
    // let nums = []
    // while( num > 0){
    //     nums.push(num % 10)
    //     num = Math.floor(num/10)
    // }
    // while( nums.length > 1){
    //     if (nums.pop() !== nums.unshift()){
    //         return false
    //     }
    //     return true
    // }
}


exports.getLargestPalindrome = (N) => {

    // iterate through range of multiplicands
    for (let i = 10 ** (N - 1); i < 10 ** N; i++) {
        num = i**2
        // check if the product is a palindrome
        if (isPalindrome(num)) {
            return num
        }
        num = i * (i-1)
        // check if the product is a palindrome
        if (isPalindrome(num)) {
            return num
        }
    }

    // return result
    return 0;
}

// input
const N = 7;

// CHALLENGE: Can you optimize the algorithm above so that works for input values N=4, N=5, N=6 
//  in a "reasonable" amount of time?
for (let j = 5; j > 0; j--){
// execution
console.time(exports.name)
exports.getLargestPalindrome(N)
console.timeEnd(exports.name)
}