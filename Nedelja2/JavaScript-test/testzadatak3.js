let n=4;
let m=1;
for (var i=1; i<=n; i++) {
      var red='';
        for (var j=1; j<=(n-i); j++) {
            red+=' ';
        }
        for (var j=1; j<2*i; j++) {
            red+='*';
        }
        for (var j=1; j<=(n-i); j++) {
            red+=' ';
        }
console.log(red);
}
for (var i=3; i>=m; i--) {
    var str='';
    for (var j=4; j>=(m+i); j--) {
        str+=' ';
    }
    for (var j=1; j<2*i; j++) {
        str+='*';
          }
          for (var j=1; j<=(m-i); j++) {
              str+=' ';
          }
console.log(str);  
}

