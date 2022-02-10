// 2. Find out if there are repeating words in a given sentence. Make sure to do this in O(n) time.
// Create a function that takes a sentence as input

let words = "I am busy today";

function chechRepeatedWords(sentence) {
    let words = sentence.split(" ");
    let wordMap = {};

    for (let i = 0; i < words.length; i++) {
        let currentWordCount = wordMap[words[i]];
        let count = currentWordCount ? currentWordCount : 0;
        wordMap[words[i]] = count + 1;
    }
    let flag = 0;
    for (const key in wordMap) {
        if(`${wordMap[key]}` > 1){
            flag = 1;
            break;
        }
    }

    if(flag === 1){
        console.log("Yes! there are repeating words");
    }
    else{
        console.log("No! repeating words");
    }
    return wordMap;
}

console.log(chechRepeatedWords(words));
