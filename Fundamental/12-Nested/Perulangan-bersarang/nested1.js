
let star = '';
for(let i = 0; i < 5; i++){
    
    for(let k = i; k > 0; k--){
        star += " ";
    }

    for(let j = i; j < 5; j++){
        star += '*';
    }
    star += '\n';
}

console.log(star)