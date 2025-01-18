// 1 Write a function that returns the sum of two numbers.

// 2 Write a function that returns the sum of all numbers regardless of # of params.
//   example:                   
//  For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3. 



function add(num1, num2) {
    return num1 + num2;
}

let result = add(1,2)
console.log(result); // Outputs: 3

// 3 Write a function that returns the sum of all numbers in an array.
function addAll(...args) {
   return args.reduce((a,b)=> a+b , 0)

}

const result2 = addAll(30,40,30) ; // Outputs: 100 / 0
console.log(result2);
