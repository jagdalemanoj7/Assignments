/* Given a number n, determine whether it is a prime number or not. A prime number is a
number greater than 1 that has no positive divisors other than 1 and itself.

Examples :
Input: n = 7
Output: true
Explanation: 7 has exactly two divisors: 1 and 7, making it a prime number.

Input: n = 25
Output: false
Explanation: 25 has more than two divisors: 1, 5, and 25, so it is not a prime number.

Input: n = 1
Output: false
Explanation: 1 has only one divisor (1 itself), which is not sufficient for it to be considered
prime. */

function primeNumber(n: number[]) {
  
    for (let i = 0; i < n.length; i++) { 
        let isEven = false;             // 7,
        let p = n[i]! / 2;
        if (n[i] == 0 || n[i] == 1) {
                console.log(`${n[i]} is Natural Number!! ${isEven}`);
                continue
            }
        for (let j = 2; j < p; j++) {                   // 3
              if (n[i]! % j == 0) {
                isEven = true;
            }
        }
        
        if (isEven===false)
            console.log(`${n[i]} is a Prime Number ${!isEven}`);
        else
            console.log(`${n[i]} is not a Prime Number! ${!isEven}`);
    }
    
}
primeNumber([7, 25, 1]);