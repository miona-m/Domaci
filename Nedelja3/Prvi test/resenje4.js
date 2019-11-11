//Koliko zadati mesec ima dana, Postoji boolean koji govori da li je godina prestupna.
let month = 4;
let isLeap = true;

switch(month){
    case 0: case 2: case 4: case 6: case 7: case 9: case 11:
        console.log(31);
        break;
        case 1:
            if(isLeap)
            console.log(29);
            else
            console.log(28);
            break;
        case 3: case 5: case 8: case 10:
            console.log (30);
            break;
        default:
            console.log("Nepravilan unos.")
}