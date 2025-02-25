// const marks = [92,82,85,90,70,75];

//  function  avg(arr) {
//     let sum = 0

//     for(let mark of marks){
//          sum+=mark;
//     }
//     return Math.floor(sum/arr.length)
// }

// console.log(avg(marks));

//discount price formula

// const price = [250,645,300,900,50];
//simple for of loop
// function parcentest (arrs,p){
//     let discount =[];
//     for(let total of arrs){
//         discount.push(Math.abs(((p/100)*total) - total))
//     }
//     return discount
// }
//map loop
// function parcentest (arrs,p){
//     return arrs.map((item)=>item -(p/100*item))
// }
// const result = parcentest(price,10)
// console.log(result);

//একটি অ্যারে থেকে ডুপ্লিকেট মান সরিয়ে ইউনিক মানের অ্যারে তৈরি করো।
// Input: [1, 2, 3, 2, 4, 3, 5]
// Output: [1, 2, 3, 4, 5]
// const input= [1, 2, 3, 2, 4, 3, 5]

// function duplicatDelete ( arrs){
//   let newArray =[]
//   for(let i=0; i<arrs.length;i++){
//     if(newArray.indexOf(arrs[i ])=== -1){
//         newArray.push(arrs[i])
//     }
//   }
//   return newArray
// }
// console.log([...new Set(input)]);
// const res = duplicatDelete(input)
// console.log(res);

//২. অ্যারের এলিমেন্ট যোগফল:
// একটি অ্যারের সব সংখ্যার যোগফল বের করো, তবে শুধুমাত্র পজিটিভ সংখ্যাগুলোর যোগফল করবে।
//Input: [10, -20, 30, -40, 50]
// Output: 90  // (10 + 30 + 50)

// const input= [10, -20, 30, -40, 50,]
// function positiveNumbar (arrs){
//     let positiveArray =[];
//     arrs.filter((value)=>{if(value>0){positiveArray.push(value)}})
//     const sum = positiveArray.reduce((acc,num)=> acc+num, 0)
//     return sum

// }

// console.log(positiveNumbar(input));//output 90

/**
 * ৩. দ্বিতীয় বৃহত্তম সংখ্যা:
    একটি অ্যারে থেকে দ্বিতীয় বৃহত্তম সংখ্যা খুঁজে বের করো।
 */

//     const arr = [10, 20, 30, 40, 50,60];

//     function getsecondLargestNumbar (arrs){
//         let fastLargestNumbar = 0;

//         let secondLargestNumbar = 0;
//         arrs.forEach(num => {
//             if(num > fastLargestNumbar){
//                 secondLargestNumbar = fastLargestNumbar;
//                 fastLargestNumbar = num;
//             }else if(num> secondLargestNumbar && num<fastLargestNumbar){
//                 secondLargestNumbar = num
//             }
//         });
//         return secondLargestNumbar

//     }

//   console.log(  getsecondLargestNumbar(arr));//50

/**
 * ৪. অ্যারে এলিমেন্ট বিপরীতক্রমে সাজানো:
    অ্যারের সব এলিমেন্টকে উল্টো ক্রমে সাজাও (বিনা বিল্ট-ইন মেথড ব্যবহার করে)।
    Input: [1, 2, 3, 4, 5]
    Output: [5, 4, 3, 2, 1]


 */

// function reverseArray (arr){
//     let newArray = [] 
//     for(let i = arr.length -1 ; i>=0 ; i--){
//      newArray.push(arr[i])
//     }
//     return newArray
// }

// console.log(reverseArray([1,2,3,4,5]));

/**
 * title:৫. ফিজ বাজ সমস্যা (FizzBuzz Variation):
 * discription:১ থেকে ১০০ পর্যন্ত সংখ্যার মধ্যে:

৩ দিয়ে বিভাজ্য হলে "Fizz"
৫ দিয়ে বিভাজ্য হলে "Buzz"
৩ ও ৫ দিয়ে বিভাজ্য হলে "FizzBuzz"
অন্য সবক্ষেত্রে সংখ্যাটাই প্রিন্ট করবে।

ex:Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", ... , "FizzBuzz"]

 */

function fizzBuzz (){
    let fizzArray = [];

        for(let i= 1; i<=200; i++){
            if(i%3 === 0){
                
                fizzArray.push("Fizz")
            }else if(i%5 === 0){
               
                fizzArray.push("Buzz")
            }else if(i%15 === 0){
             
                fizzArray.push("FizzBuzz")

            }else{
                fizzArray.push(i)
            }
        }
        return fizzArray
}
console.log(fizzBuzz());