//ceritanya gini... ada suatu perusahaan yang menjual sabun..
//mereka tiap hari dapat menghasilkan sabun perhari 100 pcs
//per pcs harganya Rp3000
//dibuatkan lah aplikasi untuk menghitung jumlah stok sabun, sabun yang terjual, penghasilan per hari
//jika stok sabun sudah 0(kosong), maka penjualan dihentikan dan akan muncul "stok sabun telah habis terjual"
//jika yang dimasukan melebihi stok, maka akan ada pesan "yang anda masukan terlalu banyak :)"
console.log('stok nya 100')
var sabun = [100];
var angka = [Number];
var total = 0;
var harga = 3000;
var stok = 0;
var omset = 0;
var jual = function(angka , sabun){
    if(angka <= 100 ){
        if(sabun.length == 0){
        sabun.push(angka);
        // hasil.push(angka);
        return sabun;
    }else{
            for(var i = 0;i < sabun.length; i++){
                if( i == sabun.length - 1 && sabun > 0){
                    sabun[i] = sabun[i] - angka;
                    total = 100 - sabun[i];
                    console.log(100 - sabun[i] + ' sabun telah dijual.');
                    console.log('penghasilan = Rp' + (total * harga));
                    stok = sabun;
                    omset = total * harga;
                    return sabun;
                }else if(sabun == 0 && sabun <= 0){
                    console.log('stok sabun telah habis terjual.');
                }
            }
        }
    }console.log('yang anda masukan terlalu banyak :)');
}