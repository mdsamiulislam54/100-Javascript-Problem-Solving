const rows = 4;
const columns = 5;
let star = "";


for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= columns; j++) {
    if (j === 1 || j === columns) {
      star += "*";
    } else if (i === 1 || i === rows) {
      star += "*";
    } else {
      star += " ";
    }
  }

  star += "\n";
}


