

//* closure, high order function
//* karena return valuenya adalah sebuah function

function outer(waktu){
    return function(nama){
        console.log(`Selamat ${waktu} wahai ${nama}`);
    }
}

let malam = outer("Malam");
malam("Koree");

//* convert
let total = 0, count = 1;
while(total < 10){
    total = count;
    count++;
}

console.log(total);

//* ke high order function
function sum1(rangeFunction){
    return rangeFunction;
}

function range1(total, count){
    while(total < 15){
        total = count;
        count++;
    }

    console.log(total);
}
sum1(range1(0, 1));

//* versi 2
function sum2(){
    function rangeFunction(total, count){
        while(total < 10){
            total = count;
            count++;

        console.log(`count = ${count} and total = ${total}`);
        }
    };    
    return rangeFunction;
};
let versi2 = sum2();
// versi2(0, 1);

//* versi 3
function sum3(total, count){

    function range3(){

      while(total < 10){
        total = count;
        count++;

        console.log(`count = ${count} and total = ${total}`);
      }
    };

    range3();
}
sum3(0, 1);

//* convert 2

for(let i = 1; i <= 10; i++){
    console.log(i);
}
console.log("===")

function repeatLog(n){
    for(let i = 1; i <= n; i++){
        if(i > n){
            break;
        }else {
            console.log(i);
        }
    };
};

repeatLog(10);