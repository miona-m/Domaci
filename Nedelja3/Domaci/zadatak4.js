function lifeSupply(numPerMonth,age){
    var yearAmount = numPerMonth*12;
    var total = yearAmount*age;
    console.log("Biće Vam dovoljno" + total + "pizze za doživotno snabdevanje.");
  }
  
  console.log(lifeSupply(10,26))
  