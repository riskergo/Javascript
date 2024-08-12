

// object
// isi di dalam object disebut properti
// fungsi di dalam object disebut method (serupa dengan array karena array merupakan tipe data object)

// rumus:
/* 
    keyword( var, let, const) = {
        //* properti list
        name/key : value

        //* method/function
        name/key : value
    }
*/

// test 1
var motor = {
    brand: "Suzuki",
    CC: 109,
    type: "matic",
    fuelSystem: "fuel injection",
    tires: {
        ring: "14",
        depan: "80/90",
        belakang: "90/90",
    },
    engineType: ['Single cylinder', "4 Stroke", "2 valves", "SOHC", "Air cooled engine"],
    engineSpecs: function(){

        let total = '';

        for(let i = 0; i < this.engineType.length; i++){
            if( !(i == (this.engineType.length-1)) ){
                total = total + this.engineType[i] + ", ";
            }else {
                total = total + this.engineType[i];
            }
                
        }

        return total;
    }
}



let handphone = {
    type: "Android",
    brand: "POCO",
    nameType: "F6",
    notify: "SPECS : " ,
    specs: {
        CPU: "Snapdragon 8s Gen 3 (4nm)",
        GPU: "Adreno 735",
        RAM: 12,
        internalStorage: 512,
        internalType: "UFS 4.0",
        batteryCapacity: "5000mAh",
        Charging: "90W",   
    },
    show: function(){
        console.log(
            "1. " + this.type + "\n" + 
            "2. " + this.brand + "\n" + 
            "3. " + this.nameType + "\n" +
            "4. " + this.notify + "\n" + "\t" +
                "4.1. " + this.specs.CPU + "\n" + "\t" +
                "4.2. " + this.specs.GPU + "\n" + "\t" +
                "4.3. " + this.specs.RAM + "\n" + "\t" +
                "4.4. " + this.specs.internalStorage + "\n" + "\t" +
                "4.5. " + this.specs.internalType + "\n" + "\t" +
                "4.6. " + this.specs.batteryCapacity + "\n" + "\t" +
                "4.7. " + this.specs.Charging + "\n" 
        )
    }
}


const laptop = {
    type: "Workseries",
    brand: "Lenovo",
    nameType: "Ideapad slim 5",
    notify: "SPECS : ",
    specs: {
        CPU: "AMD RYZEN 5 4500U",
        GPU: "RADEON VEGA 6",
        RAM: 8,
        internalStorage: 512,
        internalType: "SSD",
        operatingSystem: "Windows"
    },
    show: function() {
        console.log(
            "1. " + this.type + "\n" + 
            "2. " + this.brand + "\n" + 
            "3. " + this.nameType + "\n" +
            "4. " + this.notify + "\n" + "\t" +
                "4.1. " + this.specs.CPU + "\n" + "\t" +
                "4.2. " + this.specs.GPU + "\n" + "\t" +
                "4.3. " + this.specs.RAM + "\n" + "\t" +
                "4.4. " + this.specs.internalStorage + "\n" + "\t" +
                "4.5. " + this.specs.internalType + "\n" + "\t" +
                "4.6. " + this.specs.operatingSystem + "\n"
        )
    }
}