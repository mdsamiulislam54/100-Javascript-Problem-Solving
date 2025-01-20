// Almost Increasing Sequence

// Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array.

// For sequence = [ 1, 3, 2, 1], the output should be almostincreasingSequence(sequence) = false;

// For sequence = [ 1, 3, 5, 7 ], the output should
// be almostincreasingSequence(sequence) = true.
// For sequence = [ 1, 2, 3], the output should be almostincreasingSequence(sequence) = true;
// You can remove 3 from the array to get a strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]

// overwall 2 ta problem thakle true retun korbe and  3 ta thakle false retun korbe 
// Hints : loop

// addvance solution ........
let problem = 0;
almostincreasingSequence = (sequence) => {
  
    for(let i = 0; i < sequence.length -1 ; i++) {
       
        if (sequence[i] >= sequence[i + 1]) {
            problem++

           if(problem > 1){
            return [` ${JSON.stringify(sequence)} `, false];
           }
          if(i > 0 && sequence[i - 1] >= sequence[i + 1] && i + 2 < sequence.length && sequence[i] >= sequence[i + 2]) {
            return [` ${JSON.stringify(sequence)} `, false];
        }
       }
    }
    return [` ${JSON.stringify(sequence)} `, true];
       
}
console.log(problem);
// Test the function
console.log(almostincreasingSequence([1,2,3,4]));
console.log(almostincreasingSequence([1,2]));
console.log(almostincreasingSequence([1,3,4,1,7]));


// Simple Solution
let sequenceFc = (sequence) => {
    for(let i = 1; i < sequence.length ; i++) {
        if(sequence[i] < sequence[i-1]){
            return false;
        }

    }
    return true;
}

console.log(sequenceFc([1,2,3]));
console.log(sequenceFc([1,5,3]));
console.log(sequenceFc([1,2,3]));