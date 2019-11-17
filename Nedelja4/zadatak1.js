let receptGomboce={
    ime: 'Gomboci',
    tezina: 'Lako',
    sastojci: ['brasno', 'krompir','prezla', 'sljive', 'secer']
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
    ime: 'Strudla s makom',
    tezina: 'Tesko',
    sastojci: ['mleko', 'kvasac', 'mast', 'jaja', 'secer', 'brasno', 'mleveni mak', 'vanilin secer', 'secer u prahu']
}

let receptGulas={
    ime: 'Gulas',
    tezina: 'Srednje',
    sastojci: ['junetina', 'crni luk', 'aleva paprika', 'lovorov list', 'so', 'biber']
}

ispisiRecept(receptGomboce);
ispisiRecept(receptStrudlaSMakom);
ispisiRecept(receptGulas);
ispisiRecept(receptRibljiPaprikas);
ispisiRecept(receptSnenokle);

function ispisiRecept(object){
    console.log("-------------------------------------------------------")
    console.log(object.ime + ":");
    console.log("Tezina: " + object.tezina);
    console.log("Sastojci: " + object.sastojci);
    console.log("-------------------------------------------------------")
}
