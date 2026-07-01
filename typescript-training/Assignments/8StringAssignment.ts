/*****************************************************************************************************************************************
Assignment: Write a program to search for all occurrences of a “Java” word 
               in the paragraph and print their indexes.

1. Find total number of occurrences
2. Print count and Indexes of the word

String paragraph = "Java is a popular programming language. Java is used for web
development, mobile applications, and more.";                                        
*****************************************************************************************************************************************/

function findWordOccurence(paragraph: string) {
    let word='Java'
    let words = paragraph.split(" ");
    let count = 0;
    let index : Set<number> = new Set()
    console.log(`Indexed of the word ${word}: `)
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {

            console.log(`${i}`)
            count++;
        }
    }
    console.log(`Total number of occurrences of word ${word} : ${count}`)
    // console.log(`Indexed of the word ${word}: ${index}`)
}
findWordOccurence(
  "Java is a popular programming language. Java is used for web development, mobile applications, and more.",
);
