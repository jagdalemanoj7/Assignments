/**************************************************************************************************************************************** 
Assignment: Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence

String sentence = "Java programming is fun and challenging";                 
****************************************************************************************************************************************/

function stringPrograms(sentence: string) {
    console.log(`Original String is :- ${sentence}`)
    let count = sentence.split(" ").length;
    console.log(`1. Count the total number of words in the sentence is :- ${count}`);

    console.log(`2. Sentence words in reverse order is :- `);
    let word = sentence.split(' ');

    for (let w = 0; w < word.length; w++) {           // Java
        let char = word[w]
        let reverseWord=""
        for (let c = char!.length - 1; c >= 0; c--) {
            reverseWord+=char![c]
        }
        console.log(reverseWord)
    }

    //3. Convert the first character of each word to uppercase and print original sentence
    let capString=''
    word=sentence.toLowerCase().split(' ')          // java
    for (let w = 0; w < word.length; w++) {
        let firstw=word[w]!.substring(0,1)
        let afterw=word[w]!.substring(1)
        capString = capString + firstw.toUpperCase() + afterw.toLowerCase() + ' '
    }
    console.log(`3. First character of each word to uppercase and remaining is in lowercase :- ${capString}`)
}
stringPrograms("Java programming is fun and challenging");
