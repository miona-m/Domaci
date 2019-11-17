let sastojak1={
    imeSastojka:'krompir',
    kolicina:7,
    cena:5
}

let sastojak2={
    imeSastojka:'brasno',
    kolicina:1,
    cena:40
}

let sastojak3={
    imeSastojka:'jaje',
    kolicina:1,
    cena:12
}

let sastojak4={
    imeSastojka:'sljive',
    kolicina:15,
    cena:10
}

let sastojak5={
    imeSastojka:'prezla',
    kolicina:1,
    cena:40
} 

let nizSastojaka = [sastojak1, sastojak2, sastojak3, sastojak4, sastojak5];

let receptGomboce={
    ime: 'Gomboci',
    tezina: 'Lako',
    sastojci: nizSastojaka
}

console.log(receptGomboce);


ispisiUkupnuCenu();

function ispisiUkupnuCenu(){
   let cenaRecepta=0;

   receptGomboce.sastojci.forEach(sastojak => {
       cenaRecepta += (sastojak.kolicina * sastojak.cena);
   });
console.log(cenaRecepta);
}