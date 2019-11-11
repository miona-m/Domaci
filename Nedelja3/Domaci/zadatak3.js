function divisibleBy5(array){
    for (var a=0; a<array.length; a++) {
        if(array[a]%5===0) {
            divisibleBy5.push(array[a]);
        }
    }
}

console.log (divisibleBy5([5,15,20,60,77]));

//alternativno-------------------------------------------------------------------------------------

function divisibleBy5(){
    var array = [];
    var divBy5 = [];
  for (var i = 0; i < array.length; i++) {
        if (array[i]%5==0) {
      divBy5.push(array[i]);
    }
  }
    return divBy5;
}
console.log (divBy5([5,15,20,60,77]));