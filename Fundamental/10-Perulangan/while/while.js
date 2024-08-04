// hati hati dengan infinity loop
// contoh :
/* while(true){
    console.log("Infinity Loop")
} */


// yang benar :

let startValue = 1;
while (startValue <= 5) {
    console.log("Hello world " + startValue + "x");
    startValue++;
}

