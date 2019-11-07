for (var n=1; n<=100; n++) {
    if (n%3===0&&n%5===0) {
        console.log("FizzBuzz");
    }
    else if (n%3===0) {
        console.log ("Fizz");
    }
    else if (n%5===0) {
        console.log("Buzz");
    }
    else {
        console.log(n);
    }
}


for(let n=1; n<=100; n++) {
    let ispis = '';
    if (n%3==0)
     ispis+='Fizz';
    if (n%5==0)
     ispis+='Buzz';
    if (n%7==0)
     ispis+='Zazz';
    if (ispis=='')
     ispis=n;
    console.log(ispis)

}