
const rows = 10;
let star = ''

for(let i= rows; i>= 1;i--){
    for(let j=1;j<=i;j++){
        star+="*"
    }
    star+='\n'
}
const reactangle = document.getElementById('reactangle')
reactangle.innerHTML=star
console.log(star);
