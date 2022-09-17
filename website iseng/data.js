const nama = "daffa putra";
let usia = 15 ;

const biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18) { 
        generasi = 'generasi remaja';
    } 
    else if(usia > 10 && usia < 30) {
        generasi = 'generasi dewasa';
    }
    else if(usia >= 30) {
       generasi = 'generasi tua'; 
    }
    else if(usia > 1 && usia < 10) {
        generasi = 'generasi anak anak';
    }
    
    else {
        generasi = 'generasi bayi';
    }
    return biodata.innerHTML = generasi;

}

console.log(nama);
console.log(usia);

generateBiodata();