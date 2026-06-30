/* 1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students

Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0 */

function studentScore(sName: string[], marks: number[]) {
    console.log(`Updated Marks:`)
    let updatedMarks:number[]=[]
    let total:number=0
    for(let i=0; i<marks.length; i++){
       updatedMarks[i]=marks[i]!+10
       total+=updatedMarks[i]!
        console.log(`${sName[i]} : ${updatedMarks[i]}`)
    }
    total=total/3
    console.log(`Average Marks: ${total}`)
}
studentScore(['Suresh','Mahesh','Naresh'],[75, 80, 82])