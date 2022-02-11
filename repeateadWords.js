const text = 'It was sunny in the morning but now it is to cold';

function checkRepeatingWords(sentence) {
    sentence=sentence.toLowerCase();
    const words = sentence.split(' ');
    let flag = 0;
    const wordMap = new Map();
    for (let index = 0; index < words.length; index++) {
        if (wordMap.has(words[index])) 
        {
            flag = 1;
        } 
        else 
        {
            wordMap.set(words[index], 1);
        }
    }
    if (flag) {
        console.log("String contains repeating words");
    } else {
        console.log("Strings does not contain repeating words");
    }
}
chechRepeatingWords(text);
