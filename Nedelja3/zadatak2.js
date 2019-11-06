function ispisiCenu (cena,poluprecnik){
    var povrsinaPizze=(poluprecnik*poluprecnik)*3.14;
    return (cena/povrsinaPizze)
}
console.log(ispisiCenu(700,16));