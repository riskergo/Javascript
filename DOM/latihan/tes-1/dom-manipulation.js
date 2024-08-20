        //* document.createElement("element");
        //* document.createTextNode("isi teks")

//* buat element dan teks baru
const paragrafTerakhirBaru = document.createElement("p");
const teksUntukParagrafTerakhirBaru = document.createTextNode("The Tarnished is the protagonist of Elden Ring.");

//* tangkap element yang ingin ditambahkan
const capturedSectionSatu = document.getElementById("satu");

        //* namaNode.appendChild(newNode);
//* tambahkan element paragrafBaru sebuah textNode
paragrafTerakhirBaru.appendChild(teksUntukParagrafTerakhirBaru);
capturedSectionSatu.appendChild(paragrafTerakhirBaru);


        //* parent-node.insertBefore(node/elementBaru, elementSetelahnya);
//* buat element-nya dan append
const pBaru = document.createElement("p");
const textBaru = document.createTextNode("Dark Souls I, Dark Souls II, Dark Souls III and Elden Ring");
pBaru.appendChild(textBaru);
pBaru.style.backgroundColor = "lightGreen";
pBaru.style.fontSize = "20pt";
pBaru.style.textAlign = "center";

//* tangkap element yang letaknya setelah element yang ingin ditambahkan
// const pIndex1 = capturedSectionSatu.querySelector(".p1");
const pIndex1 = capturedSectionSatu.getElementsByTagName("p")[0];


//* insertBefore
capturedSectionSatu.insertBefore(pBaru, pIndex1);

pBaru.classList.add("p0");

const getContainer = document.getElementsByClassName("container")[0];

const newButton = document.createElement("button");
const newTextForButton = document.createTextNode("Send!");
newButton.appendChild(newTextForButton);
newButton.style.width = "50%"
newButton.style.margin = "20px auto";

newButton.setAttribute("nama", "tombol")
newButton.setAttribute("type", "submit")

getContainer.appendChild(newButton);

const capturedSectionDua = document.getElementById("dua");

const newForm = document.createElement("form");
const newLabel = document.createElement("label");
const newInputType = document.createElement("input");

newLabel.setAttribute("for", "review")

newForm.appendChild(newLabel);
newForm.appendChild(newInputType);

