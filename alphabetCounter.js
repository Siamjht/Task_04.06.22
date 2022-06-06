// Count alphabet of a word

function alpCounter(word) {
    word = word.split("");

    let count;

    for (let i = 0; i < word.length; i++){

        if (word[i] == " ") continue;

        count = 1;
        for (let j = i + 1; j < word.length; j++) {
        
            if (word[i] == word[j]) {
                count += 1;
                word[j] = " ";
            }
        }
        console.log(word[i]," is: ",count);
    }
    console.log("\n");
}

alpCounter("hello");
alpCounter("independent");
alpCounter("ever green");
alpCounter("beautiful");
alpCounter("Bangladesh");
