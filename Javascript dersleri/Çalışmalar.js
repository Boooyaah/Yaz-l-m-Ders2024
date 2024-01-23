// let meyveler= ["Elma","Üzüm","Armut","Karpuz","Erik","Şeftali","Mandalin"]


// meyveler.forEach(e => {

//     console.log(e)
    
// });

// let sayilar=["20","61","50","42","68","67","92","91","31","69"]


// sayilar.forEach(e =>{    
    
//     if( e % 2 == 0){
//         console.log(`${e} sayisi 2'ye tam bölünüyor Kalan: ${e % 2}'dır `)


//     }
//     else{
//         console.log(`${e} sayisi 2'ye tam bölünmüyor. Kalan sayısı: ${e% 2}'dir'`)
//     }


    
// })




// let sepet =["Ekmek: 2 Tl","Süt: 19 Tl","Yumurta:2 Tl","Yağ:12 Tl","Cips:5 Tl","Çikolata: 8 Tl"]


// for(i=0;i<sepet.length;i++){


//     console.log(`${i+1}. ürün: ${sepet[i]}`)

// }


// let isimler = ["Ayşe","Fatma","Hayriye","Ahmet","Mehmet","Ali"]

// for(let a=0;a<isimler.length;a++){
//     console.log(`${a+1}. isim: ${isimler[a]}`);

// }

let sayilar =[1,25,23,35,24,23,25,35,37];
let toplam=0;
let index=0;
while(index<sayilar.length ){

    toplam+=sayilar[index];
    index++;

}