let n=5 
for (var i=1; i<=n; i++) {
      var red='';
      for (var j=1; j<=(n-i); j++) {
        red+=' ';
      }
      for (var k=1; k<=i; k++) {
        red+='#';
      }

      red+= ' ';
      for (var k=1; k<=i; k++) {
        red+='#';
      }
      console.log(red);
}