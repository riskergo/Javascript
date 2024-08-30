

const container = document.querySelector(".container");
const hugeImage = container.querySelector(".huge");

const testButton = document.getElementsByTagName("button")[0];
console.log(testButton.type);   //* script properties, cek di w3school

const test = document.getElementsByClassName("container")[0];
container.addEventListener("click", function (event) {
    if (event.target.className == "thumb") {
        // hugeImage.setAttribute("src", event.target.getAttribute("src"));
        //* cara yang lebih efektif, hanya meng-assign property src ke target src
        hugeImage.src = event.target.src;
    };
});

