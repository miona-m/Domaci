const addCompanyName=document.querySelector('#txt-company-name');
const addCompanyPib=document.querySelector('#txt-company-pib')
const addValue=document.querySelector('#txt-value');
const insertButton=document.querySelector('#btn-add');
const itemListContainer=document.querySelector('#item-list');


insertButton.addEventListener('click',addInputs); 
function addInputs(e){
    console.log(e);
    let txtBox=document.querySelector('#txt-company-name');
    console.log(txtBox);
    let companyName=txtBox.value;
    if(companyName==""){
        alert('Polje ne sme biti prazno.');
        return;
    }

    let txtBox1=document.querySelector('#txt-company-pib')
    let pibNum=txtBox1.value;
    if (pibNum.length > 8 || pibNum.length < 8) {
        alert("Pib broj mora sadrzati 8 cifara.");
        return;
    }

    let txtBox2=document.querySelector('#txt-value')
    let rsdValue=txtBox2.value;
    if (isNaN(rsdValue)) 
    {
      alert("Vrednost mora biti ispisana u brojevima.");
      return
    }

}

let itemContainer=document.createElement('div');
console.log(itemContainer);
itemContainer.className='item-info';

let itemText=document.createElement('p');
itemText.innerHTML=text;
itemText.className='company-name';
console.log(itemText);


let removeBtn=document.createElement('button');
removeBtn.className='item-trashCan';
removeBtn.addEventListener('click',removeItem);
removeBtn.innerHTML='DELETE';

itemContainer.appendChild(removeBtn);

function removeItem(e){
    let removeButton=e.target;
    let divToRemove=removeButton.parentElement.parentElement;
    console.log(divToRemove);
    divToRemove.remove();
}


 
