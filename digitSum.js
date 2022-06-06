// Sum of first and last digit of a number

function sumDigit(num) {
    
    let arr = [], i = 0;
    while (num > 0) {
        arr[i] = num % 10;
        num = Math.floor(num / 10);
        i++;
    }
    let sum = arr[arr.length - 1] + arr[0];
    return sum;
}

console.log("The sum of 1st and last digit is(45678): ", sumDigit(45678));
console.log("The sum of 1st and last digit is(32915): ", sumDigit(32915));