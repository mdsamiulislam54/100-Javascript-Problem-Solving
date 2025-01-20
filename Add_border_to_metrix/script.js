// Give a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example::
// picture = [“abc”, “ded”]
// output:::
// addBorder(picture) = [“*****”, “*abc*”, “*ded*”, “*****”]




function addBorder(pic) {
  let borderRows = pic.map((row)=> "*"+ row + "*");
  let border = "*".repeat(borderRows[0].length);
  
  borderRows.unshift(border);
  borderRows.push(border);

  return borderRows;


}
console.log(addBorder(['abc','ded'])); // Output: ["*****", "*abc*", "*ded*",*****]
