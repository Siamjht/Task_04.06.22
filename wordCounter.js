// Word count from a string

function wordCounter(bakko) {
    let count=0;

    for (let i of bakko){
        if (i == " " || i == ", " || i == ". " || i == "," || i == ".") {
            count += 1;
        }
    }
    console.log(count);
}

wordCounter("hello independent ever green beautiful bangladesh.");
wordCounter("Hello, I am Siam and I am an engineer.");
