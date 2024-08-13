


function Angkot(namaSopir, trayek, penumpang, kas){
    this.sopir = namaSopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){

        if(this.penumpang.length == 0){
            this.penumpang.push(namaPenumpang);
            return this.penumpang; 
        }else {

            for(let i = 0; i < this.penumpang.length; i++){

                if( this.penumpang[i] == undefined ){
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;    
                }else if( i == (this.penumpang.length-1)){
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang; 
                }

            }

        }

        
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length == 0){
            console.log("Angkot kosong");
            return this.penumpang;
        }else {
            for(let i = 0; i < this.penumpang.length; i++){
                
                if( (this.penumpang[i] == namaPenumpang) ){
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }else if( (i == this.penumpang.length-1) ){
                    console.log(namaPenumpang + " tidak ada di dalam angkot");
                    return this.namaPenumpang;
                }

                
            }
        }

        
    }
}

let angkot1 = new Angkot("Koree Antonio", ["Jawa Selatan", "Horeg"], ["koree", undefined], 0 );
