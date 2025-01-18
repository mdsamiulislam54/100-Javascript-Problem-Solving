
// Give an array of integers, replace all the occurrences of elementToReplace with subtractionElem. 
// 
//  example:  
// For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, the output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3]. 



let inputArray = [1,2,1,4,1,5,16,1]
let elementToReplace = 1
let subtractionElem = 3

function arrayReplace(inputArray, elementToReplace, subtractionElem) {  
    return inputArray.map((element, index)=>{
        
        if(element === elementToReplace){
             inputArray[index]= subtractionElem

        }
        return inputArray[index]
    })
}

console.log(arrayReplace(inputArray, elementToReplace, subtractionElem)) 
