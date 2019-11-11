//Napisati program koji racuna prosek brojeva deljivih sa 7 u intervalu M i N (ukljucujuci i M i N)
let m=1;
let n=100;
let sum=0; //suma deljivih brojeva sa 7
let num=0; //koliko ih je deljivo sa 7 (prosek)

for(let i=m; i<=n; i++){
    if (i%7==0){
        sum+= i;
        num++;
    }
}
console.log (`Prosek brojeva deljivih sa 7 izmedju ${m} i ${n} je ${sum/num}`);