const addReservation = document.querySelector('#btn-reserve');
const resetReservation = document.querySelector('#btn-reset');
const priceContainer = document.querySelector('#price-container');
const travelContainer = document.querySelector('#item-list')

let totalPrice=0;

let zemljaMars = {
    od : 'Zemlja',
    do: 'Mars',
    cena: 1500
}

let marsZemlja= {
    od : 'Mars',
    do: 'Zemlja',
    cena: 1500
}

let zemljaVenera = {
    od : 'Zemlja',
    do : 'Venera',
    cena : 1233
}

let veneraZemlja = {
    od : 'Venera',
    do : 'Zemlja',
    cena : 1233
}

let marsVenera = {
    od : 'Mars',
    do : 'Venera',
    cena : 67856
}

let veneraMars = {
    od : 'Venera',
    do : 'Mars',
    cena : 67856
}

let zemljaSaturn = {
    od : 'Zemlja',
    do: 'Saturn',
    cena : 5678
}

let saturnZemlja = {
    od : 'Saturn',
    do : 'Zemlja',
    cena : 5678
}

let veneraSaturn = {
    od : 'Venera',
    do : 'Saturn',
    cena: 34565
}

let saturnVenera = {
    od : 'Saturn',
    do : 'Venera',
    cena: 34565
}

let saturnMars = {
    od : 'Saturn',
    do : 'Mars',
    cena : 7867
}

let marsSaturn = {
    od : 'Mars',
    do: 'Saturn',
    cena : 7867
}

let saturnJupiter = {
    od : 'Saturn',
    do : 'Jupiter',
    cena : 456756
}

let jupiterSaturn = {
    od : 'Jupiter',
    do: 'Saturn',
    cena : 456756
}

let zemljaJupiter = {
    od : 'Zemlja',
    do : 'Jupiter',
    cena : 2345
}

let jupiterZemlja = {
    od : 'Jupiter',
    do: 'Zemlja',
    cena : 2345
}

let veneraJupiter = {
    od : 'Venera',
    do : 'Jupiter',
    cena : 354645
}

let jupiterVenera = {
    od : 'Jupiter',
    do: 'Venera',
    cena : 354645
}

let marsJupiter = {
    od : 'Mars',
    do : 'Jupiter',
    cena : 123455
}


let jupiterMars = {
    od : 'Jupiter',
    do : 'Mars',
    cena : 123455
}
 
let rute = [marsZemlja, zemljaMars, zemljaVenera, veneraZemlja, marsVenera, veneraMars, zemljaJupiter, zemljaSaturn, marsJupiter, marsSaturn, veneraJupiter, veneraSaturn, jupiterZemlja, jupiterMars, jupiterSaturn, jupiterVenera, saturnJupiter, saturnMars, saturnVenera, saturnZemlja];

addReservation.addEventListener('click', btnAddReservation);

    function btnAddReservation(e){
    let select1 = document.getElementById('select-source1');
    let planet1 = select1.value;

    let select2 = document.getElementById('select-source2');
    let planet2 = select2.value;

    if (planet1===planet2)
    alert('Greska! Ista palneta.');

    rute.forEach(ruta => {
        
        if(ruta.od == planet1 && ruta.do == planet2) {

            let tripContainer = document.createElement('div');
            tripContainer.id = 'item-list';

            let tripInfo = document.createElement('p');
            tripInfo.innerHTML = 'od: ' + ruta.od + ' do: ' + ruta.do + ' cena: ' + ruta.cena + 'rsd';

            tripContainer.appendChild(tripInfo);
            travelContainer.appendChild(tripContainer);

            totalPrice += ruta.cena;
            priceContainer.innerText = totalPrice + 'rsd';
        }
    });
    
}
function txtKeyUp(e) {
    if (e.keyCode === 13) {
        addItem();
    }
}

resetReservation.addEventListener('click', btnResetReservation);
function btnResetReservation(){
    totalPrice = 0;
    priceContainer.innerHTML = totalPrice;

    let travels = document.querySelectorAll('p');
    travels.forEach(travel => {
        travel.remove();
    
    });
    
}


//Dohvatiti elemente

//Dodati event listenere

//U funkciji event listenera naci relaciju koja je selektovana

//Cenu dodati na total price

//Total price ispisati na stranici