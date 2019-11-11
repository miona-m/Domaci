const btnOrderClassName='btn-order';
let orderButtons=document.getElementsByClassName(btnOrderClassName);
const count=document.getElementById('counter')
var klikCount=0;
var reset=0;
console.log(orderButtons);
for (let button of orderButtons){
    button.addEventListener('click', function(){
        select(button);
    });
}
function select(element){
    console.log(element);
    count++;
    count.innerHTML=klikCount;
}

const btnOrderNowClassName='btn-order-now';
let orderNowButtons=document.getElementsByClassName(btnOrderNowClassName);
console.log(orderNowButtons);

for (let button of orderNowButtons){
    button.addEventListener('click', function(){
        orderNow(count);
    });
}
function orderNow(reset){
    console.log(reset);
    if (count<=0);
    window.alert('ГРЕШКА')
}