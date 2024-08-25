const inputVolume = document.querySelector("input[type=range]");
const persentaseVolume = document.getElementById("persentase");

inputVolume.addEventListener("input", function() {
    // const textForPersentaseVolume = inputVolume.value;
    // persentaseVolume.textContent = ""+textForPersentaseVolume+"%"
    console.log(inputVolume.value);
    persentaseVolume.innerText = ""+inputVolume.value+"%"

    
})