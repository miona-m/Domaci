let username=document.querySelector('#username');
let password=document.querySelector('#password');
let confirmBtn=document.querySelector('#btn');

confirmBtn.addEventListener('click',()=>{
    if(username.value.length<3){
        alert('Username mora sadržati najmanje 3 karaktera')
    }
    if (username.value.length>15){
        alert('Username ne sme sadržati više od 15 karaktera')
    }
            
    if(isNaN(username.value[0])){
            console.log(username.value)
        }else{
            alert('Username ne sme početi brojem!')
        }
   
    });
    
/* 
5. 
Morali bismo da napravimo feach funkciju koja bi sadržala url Back-Enda. 
Koristili bi POST metod po kojem program proverava korisnika.
    
if(username.value==JSON.username||password.value==JSON.password){
    alert('Uspešno ste se prijavili')
}else{
    alert('Neuspešna prijava')
}

*/
        