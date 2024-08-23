//* coba events 1, doubleclick = dblclick;

const capturedSectionA = document.getElementById("a");
const capturedSectionB = document.getElementById("b");

const capturedP1 = capturedSectionA.getElementsByTagName("p")[0];
const capturedLink = capturedSectionA.getElementsByTagName("a")[0];
const capturedP2 = capturedSectionA.getElementsByClassName("p2")[0];
const capturedP3 = capturedSectionA.getElementsByClassName("p3")[0];

    //* actions
    capturedP1.addEventListener('dblclick', function(){
        capturedP1.style.backgroundColor = "lightblue";
        capturedP1.style.textDecoration = "underline"
        capturedP1.style.textShadow = "0 0 5px black"
        capturedP1.style.color = "white";
    })
    
    capturedLink.addEventListener("mouseenter", function() {
        capturedLink.style.backgroundColor = "lightblue";
        capturedLink.style.textDecoration = "none"
    })
    capturedLink.addEventListener("mouseleave", function() {
        capturedLink.style.backgroundColor = "white";
        capturedLink.style.textDecoration = "underline"
    })

    capturedP2.addEventListener("mouseover", function(){
        capturedP2.style.backgroundColor = "tomato";
    })

    capturedP2.addEventListener("mouseout", function(){
        capturedP2.style.backgroundColor = "white";
    })

    //* menggunakan event Handler dan addEventListener
        const input = document.createElement("input");
    input.setAttribute("type", "text");

        //* event Handler
    input.onkeydown = ubahWarna;    //* coba hoisting
    function ubahWarna(){
        input.style.backgroundColor = "lightseagreen";
    }
        //* event handler 2
    input.onmouseenter = function() {
        input.style.backgroundColor = "tomato"
    }
        //* addEventListener
    input.addEventListener("mouseleave", function() {
        input.style.backgroundColor = "lightgreen";
    })
        //* addEventListner 2
    input.addEventListener("focus", function() {
        input.style.color = "white";
    })

    capturedSectionA.replaceChild(input, capturedP3);

//* capture span
const capturedJudulSpan = document.getElementsByClassName("span-judul")[0];
capturedJudulSpan.style.display = "flex";
capturedJudulSpan.style.justifyContent = "space-between";
//* capture button
const capturedButton = capturedJudulSpan.getElementsByTagName("button")[0];
//* ganti judul
const capturedH1 = capturedJudulSpan.querySelector("#judul");
capturedH1.style.display = "inline-block"

capturedButton.addEventListener("mouseenter", function() {
    capturedButton.style.backgroundColor = "darkgrey";
    capturedButton.style.color = "white";
    // capturedButton.style.textShadow = "2px 2px 0 black"
})
capturedButton.addEventListener("mouseleave", function() {
    capturedButton.style.backgroundColor = "white";
    capturedButton.style.color = "black";
})



capturedButton.addEventListener("click", function() {

    function randomNumber(){
        return Math.floor(Math.random()*3) + 1 ;
    }

    let angka = randomNumber();
  
    if(angka < 2){
        capturedH1.innerHTML = "Welcome Choosen Undead";
    }else if (angka > 2) {
        capturedH1.innerHTML = "Welcome Bearer Of The Curse";
    }else {
        capturedH1.innerHTML = "Welcome Ashen One";
    }
})

