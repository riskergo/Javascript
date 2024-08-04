// confirm("Are you sure?");


// coba dengan perulangan while
let lagi = true;

while (lagi) {
    let nama = prompt("Masukkan nama");
    alert("Halo " + nama);

    lagi = confirm("Lagi? ");
}

alert("Bye!");