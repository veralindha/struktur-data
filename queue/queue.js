var arrayAll = new Array;
var arrayGanjil = new Array;
var arrayGenap = new Array;
var jumlah = new Array;

function random(){
    var random = Math.floor((Math.random() * 20)+1);
    return random;
}

function tambahAngka() {
    var i = 0;
    while (i < 20) {
        i++;
        var tambahData = random();
        arrayAll.push(tambahData);
    }
    var teks = arrayAll.slice();
    document.getElementById('hasil').innerHTML = teks;
    console.log(teks);
}

function pemisah(){
    for(var i = 0; i < arrayAll.length; i++){
        var banding = arrayAll[i]%2;
        if( banding == 0){
            arrayGenap.push(arrayAll[i]);
        }else{
            arrayGanjil.push(arrayAll[i]);
        }
    }
    document.getElementById('masukGenap').innerHTML = arrayGenap;
    document.getElementById('masukGanjil').innerHTML = arrayGanjil;
}

function penjumlahan(){
    var Ganjil = arrayGanjil.length
    var Genap = arrayGenap.length
    if(Ganjil > Genap){
        for(var i = 0; i < Ganjil; i++){
            if(arrayGenap[i] == undefined || arrayGanjil[i] == undefined ){
                if(arrayGanjil[i] == undefined){
                    jumlah[i] = arrayGenap[i] + 0;
                }else if(arrayGenap[i] == undefined){
                    jumlah[i] = arrayGanjil[i] + 0;
                }
            }else{
                jumlah[i] = arrayGenap[i] + arrayGanjil[i];
            }
        }
    }else if(Genap > Ganjil){
        for(var i = 0; i < Genap; i++){
            if(arrayGenap[i] == undefined || arrayGanjil[i] == undefined ){
                if(arrayGanjil[i] == undefined){
                    jumlah[i] = arrayGenap[i] + 0;
                }else if(arrayGenap[i] == undefined){
                    jumlah[i] = arrayGanjil[i] + 0;
                }
            }else{
                jumlah[i] = arrayGenap[i] + arrayGanjil[i];
            }
        }
    }
    document.getElementById('hasilJumlah').innerHTML = jumlah;
}