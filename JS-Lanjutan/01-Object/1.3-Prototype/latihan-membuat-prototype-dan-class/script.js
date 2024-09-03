

//* constructor function
function Handphone(merk,os,batteryCapacity){
    this.merk = merk;
    this.os = os;
    this.batteryCapacity = batteryCapacity;
    this.batteryPercentage = 0;
}
//* prototype-nya
Handphone.prototype.charge = function(minute){
    if(minute > 100){
        return `${this.merk} tidak bisa diisi karena sudah penuh `;
    }

    this.batteryPercentage += minute;
    return `${this.merk} telah terisi ${this.batteryPercentage}%`
}

let andro1 = new Handphone("Samsung", "Android", 5000);
//* test lewat console


//* versi class

class Laptop {
    constructor(merk){
        this.merk = merk;
        this.batteryPercentage = 0;
    }

    charge(minute){
        if(minute >= 100){
            return `Battery penuh, tidak bisa diisi`
        }
        this.batteryPercentage += minute
        return `${this.merk} telah terisi ${this.batteryPercentage}%`;
    }
}

let laptop1 = new Laptop("Lenovo");