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
document.body.insertAdjacentHTML("beforeend",elementMhs);



//* html fragment array of object
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

document.body.insertAdjacentHTML("beforeend", elementsMhs);

console.log(elementsMhs);


