function maxOfThree(poredak){
    var maxNum = 0;
    for (var a=0; a<poredak.length; a++) {
        if(poredak[a]>maxNum) {
            maxNum = poredak[a];
        }
    }
return maxNum;
}

console.log (maxOfThree ([1,2,3]));
console.log (maxOfThree ([150,11,333]));
console.log (maxOfThree ([17,-130,36]));
