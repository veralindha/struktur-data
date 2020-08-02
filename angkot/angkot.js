


// DILARANG COPYRIGHT ...HARUS IJIN DULU AMA YANG PUNYA...TERIMAKASIH TELAH MENGHARGAI AKU YANG BAIK :v




var penumpang = [];
var tambahPenumpang = function(namaPenumpang , penumpang){
    //jika angkot kosong
    if( penumpang.length == 0){
    //tambah penumpang diawal array
        penumpang.push(namaPenumpang);
    // kembalikan isi array
        return penumpang;
    }//jika tidak kosong
    else{
     //telusuri seluruh kursi dari awal
        for(var i = 0;i < penumpang.length; i++){
        //jika ada kursi kosong
            if(penumpang[i] == undefined){
            //tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
            //kembalikan isi array
                return penumpang;
            }
        //jika ada nama penumpang yang sama
            else if(penumpang[i] == namaPenumpang){
            //tampilkan pesan kesalahan
                console.log(namaPenumpang + ' sudah ada didalam angkot. ');
            //kemabalikan isi array
                return penumpang;
            }
        //jika seluruh kursi terisi
            else if( i == penumpang.length - 1){
            //tambahkan penumpang di akhir array
                penumpang.push(namaPenumpang);
            //kembalikan isi array
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang , penumpang){
    //jika angkot kosong
    if(penumpang.length == 0){
        //tampilkan pesan bahwa angkot kosong
        console.log('angkot masih kosong.');
        //kembalikan isi array
        return penumpang;
    }
    //jika angkot tidak kosong
    else{
        //telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            //jika nama penumpang sesuai
            if( penumpang[i] == namaPenumpang){
                //hapus penumpang & ubah namanya menjadi undefined
                penumpang[i] = undefined;
                //kembalikan isi array
                return penumpang;
            }
            //jika tidak ada nama yang sesuai
            else if(i == penumpang.length - 1){
                //tampilkan pesan kesalahan
                console.log(namaPenumpang + ' tidak ada didalam angkot.');
                //kembalikan isi array
                return penumpang;
            }
        }
    }
}