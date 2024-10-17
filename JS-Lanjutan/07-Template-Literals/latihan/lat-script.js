//* html fragment biasa: 
const mahasiswa = {
    nama: "Kontol ANJAY",
    nim: "12999",
    semester: 5,
    email: "KontolorekANJInk@gmail.com"
}

const elementMhs = `
    <div class="mhs">
        <h1>Mahasiswa</h1>
        <ul>
            <li>Nama     : ${mahasiswa.nama}</li>
            <li>NIM      : ${mahasiswa.nim}</li>
            <li>Semester : ${mahasiswa.semester}</li>
        </ul>
    </div>
`;
// document.body.insertAdjacentHTML("beforeend",elementMhs);



//* html fragment : array of object
const students = [
    {
        nama:"kora",
        semester: 5 
    },
    {
        nama:"kato",
        semester: 3 
    },
    {
        nama:"arpos",
        semester: 7 
    }
]

const elementsMhs = `
    <div>
        <h1>List Mahasiswa </h1>
            ${students.map(elMhs => 
                `<ul>
                    <li>Nama \u00A0 \u00A0 \u00A0 \u00A0: ${ `\u00A0 ${elMhs.nama}`}</li>
                    <li>Semester \u00A0 : ${`\u00A0 ${elMhs.semester}`}</li>
                </ul>`
            ).join("")}
    </div>
`;
// document.body.insertAdjacentHTML("beforeend", elementsMhs);


//* html fragment: conditionals
    //* menggunakan ternary
const movie = {
    title: "Batman The Dark Knight ",
    director: "Christoper Nolan",
    prequel: "Batman Begins",
    sequel: "Batman The Dark Knight Rises"
}

const movieEl = `<div>
    <ul>
        <li>Movie Title : ${movie.title} directed by ${movie.director} </li>
        ${movie.prequel && movie.sequel ? `<li>Prequel : ${movie.prequel}</li> <li>Sequel : ${movie.sequel}</li>` : ``}
    </ul>
</div>`
// document.body.insertAdjacentHTML("beforeend", movieEl);

//* HTML Fragment : nested
const mahasiswaGG = {
    nama: "kontoru",
    semester: 5,
    mataKuliah: [
        "Metode Penelitian",
        "Bahasa Mandarin",
        "Psikologi Mister Irony",
        "Bermain Yoyo",
        "Menghina Fans Manchester United",
        "Merayakan Kemenangan Indonesia Lolos Kualifikasi Piala Dunia 2026",
        "Tetap Humble walaupun menang (tidak sombong)"
    ]
}



const dataMHS = `<div>
    <h3>Nama : ${mahasiswaGG.nama}</h3>
    <h3>Semester : ${mahasiswaGG.semester}</h3>
    <h3>Matakuliah : 
        ${cetakMatkul2(mahasiswaGG)}
    </h3>
</div>`

//* versi function
 function cetakMatkul(objectM){
    return `<ol>
        ${objectM.map( (elementMatkul) => `<li>${elementMatkul}</li>` ).join("")}
    </ol>`
 }

//* versi function 2, penangkapan parameter yang berbeda tapi tidak efektif
function cetakMatkul2(objectM){
    return `<ol>
        ${objectM.mataKuliah.map( elementMatkul => `<li>${elementMatkul}</li>`).join("")}
    </ol>`
}


/* //* versi looping, 
   ? <ol>
    ?    ${mahasiswaGG.mataKuliah.map( matkul => `<li>${matkul}</li>`).join("")}
   ? </ol> 
 */
document.body.insertAdjacentHTML("beforeend", dataMHS);

// console.log(elementsMhs);