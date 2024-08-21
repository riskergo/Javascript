//* coba events 1, doubleclick = dblclick;

const capturedSectionA = document.getElementById("a");
const capturedSectionB = document.getElementById("b");

const capturedP1 = capturedSectionA.getElementsByTagName("p")[0];
const capturedLink = capturedSectionA.getElementsByTagName("a")[0];
const capturedP2 = capturedSectionA.getElementsByClassName("p2")[0];

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