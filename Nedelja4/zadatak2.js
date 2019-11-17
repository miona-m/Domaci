let receptGomboce={
    ime: 'Gomboci',
    tezina: 'Lako',
    sastojci: ["brasno", 'krompir','prezla', 'sljive', 'secer']
}

let receptSnenokle={
    ime: 'Snenokle',
    tezina: 'Pocetni',
    sastojci: ['jaja', 'secer','vanilin secer', 'brasno', 'mleko']
}

let receptRibljiPaprikas={
    ime: 'Riblji Paprikas',
    tezina: 'Lako',
    sastojci: ['riba', 'crni luk','sok od paradajza', 'belo vino', 'paprika', 'ulje', 'so', 'biber', 'lovorov list', 'rezanci']
}

let receptStrudlaSMakom={
    ime: 'Strudla',
    tezina: 'Tesko',
    sastojci: ['mleko', 'kvasac', 'mast', 'jaja', 'secer', 'brasno', 'mleveni mak', 'vanilin secer', 'secer u prahu']
}

let receptGulas={
    ime: 'Gulas',
    tezina: 'Srednje',
    sastojci: ['junetina', 'crni luk', 'aleva paprika', 'lovorov list', 'so', 'biber']
}

let nizRecepata = [receptGomboce, receptGulas, receptRibljiPaprikas, receptSnenokle, receptStrudlaSMakom];


ispisiLakeRecepte(nizRecepata);


function ispisiLakeRecepte(niz) {

    niz.forEach(recept => {
        if(recept.tezina === 'Lako' || recept.tezina === 'Pocetni') {

            ispisiRecept(recept);
        }
    });


}

function ispisiRecept(object){
    console.log("-------------------------------------------------------")
    console.log(object.ime + ":");
    console.log("Tezina: " + object.tezina);
    console.log("Sastojci: " + object.sastojci);
    console.log("-------------------------------------------------------")
}