//* the other name is destructuring assignment
/* 
    * definisi: membongkar atau unpacking sebuah nilai dari array atau property dari object
    * ke dalam variabel terpisah
*/

//* contoh sederhana

        //* array :
    const var1 = ['ak47', 'vector', 'm16'];
    const [senjata1, senjata2, senjata3] = var1;
    // console.log(senjata1,senjata2,senjata3)


    //* memilih array yang diinginkan, skipping array value
    //* skipping
    const [gun1, , ] = var1;    //* just empty the array you wanna skip but don't erase the coma
    // console.log(gun1);


    //* swap, sudah pernah dilakukan
        //* menggunakan keyword let karena ingin isinya akan diubah
    let a = 1;
    let b = 2;
    // console.log(a,b);     //* jangan lupa titik koma, karena tanpa titik koma di sini, it will throw an error
            //* biasanya memerlukan variabel tambahan untuk menampung variabelnya, tapi
            //* cukup gunakan destructuring assigment seperti ini
    [a, b] = [b, a];
    /* 
        * console.log(a,b);
        * console.log(a,b)
    */
    //* [a,b] diassign ke [b,a];   isinya akan tertukar/ter-swap


    //* bisa juga digunakan sebagai return value pada sebuah function
    function rArr(){
        return["kakarot","kokoro","kantutan"];
    }
        //* cara biasa :
    /* 
        * const varOne = rArr();
        * console.log(varOne[0], varOne[1], varOne[2]);
    */
        //* dengan destructuring assigment
    const [varTwo, varThree, varFour] = rArr(); //* langsung dipetakkan lalu dimasukkan sesuai nama variabel yang telah dibuat di dalam kurung siku
    // console.log(varTwo,varThree,varFour);


    //* contoh kasus untuk memetakan nilai array yang banyak tapi jumlah array-nya belum diketahui
        //* gunakan REST PARAMETER
            //* contoh biasa
    const [x, y] = [1, 2];
    // console.log(x, y);  //* 1, 2

            //* contoh menggunakan rest parameter yang
    const [...values] = [1,3,4,6,7,8];       //* values adalah rest parameter (..namaParameternya);
    // console.log(values.join(", "));
            //* contoh rest parameter untuk menampung isi array yang tidak diketahui 
    const [value1, ...restValue] = ["rodtang", "khabib", "makhachev"]
    // console.log(`${value1}, ${restValue.join(", ")}`);



        //* object : 
    const var2 = {
        Game: "PUBGM",
        Developer: "Krafton"
    }

    
        //* menangkap tiap-tiap property sebagai variabel:
    //* cara biasa
    const game = var2.Game;
    const developer = var2.Developer;

    //* destructuring assigment
        //* nama variabelnya harus sama, kalau sebelumnya (array) bisa bebas
    const {Game, Developer} = var2;
        //* tidak boleh sembarangan seperti ini
    //* const {a, b} = var2     ini akan error
    //* jadi harus sama dengan properti-nya
    console.log(Game, Developer);


        //* assignment tanpa deklarasi object
    ({motor1, motor2} = { motor1: "RX-King", motor2: "Ninja SS"});      //* jangan lupa bungkus dengan kurung
    // console.log(motor1,motor2);


    //* memberikan nama variabel yang kita inginkan tanpa memedulikan kesamaan terhadap nama properti
        //* assignment ke variabel baru yang namanya berbeda
    const handphone = {
        hp1: "Redmi Note 8",
        dreamphone1: "Iphone 16 Pro",
        dreamphone2: "Iphone 15 Pro",
        dreamphone3: "Poco F6"
    }    
    const {hp1: hpSaatIni, dreamphone1: InsyaAllahTahunDepan, dreamphone2: InsyaAllahTahunDepan2, dreamphone3: InsyaAllahTahunDepan3} = handphone;
    console.log(`dreamphones : ${InsyaAllahTahunDepan} or ${InsyaAllahTahunDepan2} or ${InsyaAllahTahunDepan3}`);

        /* 
            * kesimpulan:
            * gunakan kurung siku/kotak untuk destructuring array
            * gunakan kurung kurawal untuk destructuring object
        */
