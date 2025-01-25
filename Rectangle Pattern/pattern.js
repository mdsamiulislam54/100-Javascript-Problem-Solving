

const rows = 5;
const columns = 5;
let star = '';

for(let i = 0; i < rows; i++) {
    for(let j= 0; j<columns; j++) {
        star += '* ';
    }
    star+= '\n'
}
console.log(star);