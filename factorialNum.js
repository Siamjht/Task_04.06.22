// Factorial of a Number

function factNum(num) {
    let fNum = 1;
    while (num) {
        if (num > 0) fNum = num * fNum;
        num--;
    }
    return fNum;
}

console.log("Factorial of 5 is: ", factNum(5));
console.log("Factorial of 6 is: ", factNum(6));
console.log("Factorial of 7 is: ", factNum(7));