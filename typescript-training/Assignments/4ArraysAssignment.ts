/****************************************************************************************************************************************
Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
    1        50000
    2        -2000
    3         3000
    4       -15000
    5         -200
    6         -300
    7         4000
    8        -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions 
****************************************************************************************************************************************/

const transactions: number[] = [ 50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let credit: number = 0;
let debit: number = 0;
let remainingAmount: number = 0;
let countCredit = 0
let countDebit = 0
let suspicious = 0

for (let i = 0; i < transactions.length; i++) {

    if (transactions[i]! > 0){        
        countCredit++
        credit+=transactions[i]!
    }
    else {
        countDebit++
        debit+=transactions[i]!
    }

    remainingAmount+=transactions[i]!

    if(transactions[i]!>10000 || transactions[i]!<-10000 ){
        suspicious++
        console.log(`Suspicious credit/ debit Transaction with Amount ${transactions[i]}`)
    }
}
console.log(`Total number of credit ${countCredit} and debit ${countDebit} transactions completed`)
console.log(`Total amount credited ${credit} and debited ${debit} in account`)
console.log(`Total amount remaining at the end in Bank Account ${remainingAmount}`)
console.log(`Total number of suspicious transactions ${suspicious}`)