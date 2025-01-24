// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime
// Example :

// sumAllPrime(10) should return 17
// sumAllPrime(977) should return 73156


function sumAllPrime(n) {
    let sum = 0;
    for(let i =2; i<=n;i++){
        let isPrime = true;
        for(let j = 2; j<=Math.sqrt(i);j++){
            if(i%j===0){
                isPrime = false;
            }
        }
        if(isPrime){
            sum+=i;
        }
    }
    return sum;
   
}

// The function sumAllPrime takes a variable number of arguments, which are numbers. It uses th
console.log(sumAllPrime(10));  //output= 17
console.log(sumAllPrime(977));  //output= 73156
