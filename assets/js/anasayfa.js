let ilkSayi=Number(prompt('İlk sayıyı giriniz:'));
let ikinciSayi=Number(prompt('İkinci sayıyı giriniz:'));
let islem=prompt('Yapmak istediğiniz işlemi giriniz:\n\n *\n/\n+\n-');

let sonuc;

if(islem=='*'){
    sonuc=ilkSayi*ikinciSayi;
    alert(`Sonuç: ${sonuc}`);
}
else if(islem=='/'){
    sonuc=ilkSayi/ikinciSayi;
    alert(`Sonuç: ${sonuc}`);
}
else if(islem=='+'){
    sonuc=ilkSayi+ikinciSayi;
    alert(`Sonuç: ${sonuc}`);
}
else if(islem=='-'){
    sonuc=ilkSayi-ikinciSayi;
    alert(`Sonuç: ${sonuc}`);
}