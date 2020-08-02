var nama = new Array();
var nim = new Array();
var ip = new Array();
var semester = new Array();

function nilaiIP(idElemenMatkul, idElemenSks){
    var input = document.getElementById(idElemenMatkul);
    var nilaiIpnya = input.value;
    var nilaiAngka;
    var jumlahSks = parseInt(document.getElementById(idElemenSks).innerHTML);
    var nilaiAkhir;
    switch(nilaiIpnya){
        case 'A':
            nilaiAngka = 4;
            break;
        case 'AB':
            nilaiAngka = 3,5;
            break;
        case 'B':
            nilaiAngka = 3;
            break;
        case 'BC':
            nilaiAngka = 2,5;
            break;
        case 'C':
            nilaiAngka = 2;
            break;
        case 'CD':
            nilaiAngka = 1,5;
            break;
        case 'D':
            nilaiAngka = 1;
            break;
        case 'DE':
            nilaiAngka = 0,5;
            break;
        case 'E':
            nilaiAngka = 0;
            break;
        default:
            alert('yang anda masukan pada kolom nilai salah, silahkan masukan dengan benar yaitu dengan menggunakan huruf besar/kapital !!');
            break;
    }
    nilaiAkhir = nilaiAngka * jumlahSks;
    return nilaiAkhir;
}

function output(hasil, idElemen){
    if(hasil < 0){
        hasil = 'KOSONG'
    }
    document.getElementById(idElemen).innerHTML = hasil.toString();
}

function tambah(array){
    var total = 0;
    for (var i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}
function tampil() {
    for (var i = 0; i < nama.length; i++) {
        document.getElementById('namanya').innerHTML = nama[i];
        document.getElementById('nimnya').innerHTML = nim[i];
        document.getElementById('ipnya').innerHTML = ip[i];
        document.getElementById('semesternya').innerHTML = semester[i];
    }
}

function proses(){
    var nilaiMatkulArray = new Array();
    var nilai1 = nilaiIP('nilai1', 'sks1');
    nilaiMatkulArray.push(nilai1);
    output(nilai1, 'nk1');
    var nilai2 = nilaiIP('nilai2', 'sks2');
    nilaiMatkulArray.push(nilai2);
    output(nilai2, 'nk2');
    var nilai3 = nilaiIP('nilai3', 'sks3');
    nilaiMatkulArray.push(nilai3);
    output(nilai3, 'nk3');
    var nilai4 = nilaiIP('nilai4', 'sks4');
    nilaiMatkulArray.push(nilai4);
    output(nilai4, 'nk4');
    var nilai5 = nilaiIP('nilai5', 'sks5')
    nilaiMatkulArray.push(nilai5);
    output(nilai5, 'nk5');

    var Salah = nilaiMatkulArray[0];
    for( i = 0; i < nilaiMatkulArray.length; i++){
        if( nilaiMatkulArray[i] < Salah){
            Salah = nilaiMatkulArray[i];
        }
    }

    if (Salah >= 0) {
        var totalNilai = tambah(nilaiMatkulArray);
        var ipnya = (parseFloat((totalNilai / 16).toString())).toFixed(2);
        output(totalNilai, "jumlahnya");
        output(ipnya, "ipnya");
        ip.push(ipnya);
        var namanya = (document.getElementById('nama').value);
        nama.push(namanya);
        var nimnya = (document.getElementById('nim').value);
        nim.push(nimnya);
        var semesternya = (document.getElementById('semester').value);
        semester.push(semesternya)
        tampil();
    }
}

function reset() {
    document.getElementById('nim').value = "";
    document.getElementById('nama').value = "";
    document.getElementById('nilai1').value = "";
    document.getElementById('nilai2').value = "";
    document.getElementById('nilai3').value = "";
    document.getElementById('nilai4').value = "";
    document.getElementById('nilai5').value = "";
    document.getElementById('nk1').innerHTML = "";
    document.getElementById('nk2').innerHTML = "";
    document.getElementById('nk3').innerHTML = "";
    document.getElementById('nk4').innerHTML = "";
    document.getElementById('nk5').innerHTML = "";
    document.getElementById('jumlahnya').innerHTML = "";
    document.getElementById('ipnya').innerHTML = "";
    document.getElementById('namanya').innerHTML = "";
    document.getElementById('semesternya').innerHTML = "";
    document.getElementById('nimnya').innerHTML = "";
    ip=[];
    nama=[];
    nim=[];
    semester=[];
    nilaiMatkulArray=[];
}