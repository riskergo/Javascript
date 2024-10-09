

//* macam-macam simbol string 
//* '' (kutip satu)
//* "" (kutip dua)
//* `` (backtick)   --> ini spesial

//* kemampuan backtick
    //* multi-line string
        //* contoh :
//         console.log(`Halo
// Siapa di sana?
// anda gg`)
        //* contoh lain untuk multi line string HTML Fragments
        const mhs = {
            nama: "GG",
            umur: 31 ,
            nrp: "13123",
            email: "koafkoa!@mcx.co"
        }
            //* versi lama :
        let el = " ";
        el += "<div class='mhs'>";
        el += "<h2>" + mhs.nama + "</h2>";
        el += "<span class='nrp'>" + mhs.nrp + "</span>";
        el += "</div>";
            //* versi baru (coba dulu sendiri)
        let elV2 = `<div class="mhs"><h2>${mhs.nama}</h2><span class="nrp"> ${mhs.nrp} </span></div>`

        //  console.log(el);
        //  console.log(elV2);

         const capturedElementH1 = document.querySelector("h1");
        //  console.log(capturedElementH1)
         document.body.insertAdjacentHTML("afterend", elV2)
        
    //* embedded expression
        let expression = "Tiga5";
        // console.log(`embedded expression: ${expression}`)
        //* expression interpolation
        let a = 10;
        let b = 15;
        console.log(`a = 10, b = 15, hasil penjumlahannya adalah ${a + b}, bukan ${2 * a + b}`)
        //* function ataupun ternary, karena keduanya termasuk expression
        // console.log(`${alert("so")}`);
        let x = 15;
        console.log(`${(x % 2 == 0) ? "Genap" : "Ganjil"}`);
        
    
    //* tagged template 