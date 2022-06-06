// Love and Hate song

function mySong(count) {

    // Array creating with love and hate
    let arr = [];
    for (let i = 0; i < count; i++){
        if (i % 2 == 0) {
            arr[i] = "I love"; 
        }
        else {
            arr[i] = "I hate";
        }
    }
    
    // that and it concatenation with each array element
    let concat = "";
    for (let i in arr) {
       
        if (i == arr.length - 1) {
            concat += arr[i] + " it.";
        } 
        else {
            concat += arr[i] + " that ";
        }
    }
    return concat;
}

console.log(mySong(1));
console.log(mySong(2));
console.log(mySong(3));
console.log(mySong(4));
console.log(mySong(5));